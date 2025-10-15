---
sidebar_position: 6
---

# Video Streaming

This guide explains how **GStreamer** and **WebRTC** are used for real-time video streaming, enabling remote monitoring and teleoperation.

## Overview

K-Bot's video streaming system enables real-time communication between the robot and remote applications through a combination of:

- **GStreamer**: Handles media capture, processing, and streaming
- **WebRTC**: Provides peer-to-peer communication with low latency
- **Signaling Server**: Facilitates connection establishment
- **TURN Server**: Handles NAT traversal for complex network environments

### Relevant Repos
[kscalelabs/gstreamer](https://github.com/kscalelabs/gstreamer): Various gstreamer examples and more documentation.
- **stream.py**: full working example of bi-directional video and audio streaming.
- **undistort.py**: example using appsink, which allows you to write custome plugins. In the example, opencv is used to undistort the fisheye lens but this could also be relevant if running a vision model on-board.
- **fullAnalysis.py**: generates pipeline diagrams as a png and logs performance such as latency or cpu usage.
- **c_code.c**: example pipeline creation in C.

[kscalelabs/kscale_vr_teleop](https://github.com/kscalelabs/kbot_vr_teleop): Simplified gstreamer pipeline and signaling server, actively being used for teleop.

### Setting Up Environment
For Python, you can use Conda or venv. We recommend venv. GStreamer is system-installed and written in C. Python uses PyGObject with GObject Introspection (GI) typelibs to access it. Using Conda typically requires exporting GI_TYPELIB_PATH, GST_PLUGIN_PATH, and LD_LIBRARY_PATH to expose system GStreamer.

Steps to set up in venv:

```bash
# Core GStreamer + GI bindings
sudo apt install -y python3-gi gir1.2-gstreamer-1.0 gstreamer1.0-plugins-base

# WebRTC (webrtcbin lives in -plugins-bad)
sudo apt install -y gstreamer1.0-plugins-bad

# ICE/ICE-TCP via libnice
sudo apt-get install -y gstreamer1.0-nice

# Libcamera source element (libcamerasrc)
sudo apt install -y gstreamer1.0-libcamera

# Python environment that can see system GI packages/typelibs
python3 -m venv --system-site-packages webrtc-pi-env
source webrtc-pi-env/bin/activate

# Python deps used by examples/tools
pip install websockets python-dotenv
```

### System Design
**Direct Connection**: When the robot's IP is accessible to the client
- Client connects directly to robot
- No signaling server required
- Works on same local network or when the robot has a public IP

**Signaling Server Connection**: When the robot is behind NAT/firewall
- Client and robot both connect to signaling server
- Server facilitates connection establishment
- More complex but works in restricted networks

**TURN Server Relay**: When both the robot and client are behind NAT/firewalls
- Relays media traffic when direct peer-to-peer connection fails
- Adds latency due to relay routing
- Typically hosted on cloud infrastructure like AWS EC2

Instructions for setting up a turn server on AWS EC2 using Coturn are available [here](https://github.com/kscalelabs/gstreamer)

## Pipeline Configuration
### Sources
These are generally the paths to camera devices:
```python
VIDEO_SOURCES = [
    "/base/axi/pcie@1000120000/rp1/i2c@80000/ov5647@36",  # Camera 0
    "/base/axi/pcie@1000120000/rp1/i2c@88000/ov5647@36"   # Camera 1
]
AUDIO_SOURCE = "hw:0,0"
```
These paths should work on your Kbot, if they don't, run this to debug available cameras:
```bash
libcamera-hello --list-cameras
arecord -l
```

### Import WebRTC Settings
```python
# sets latency of jitter-buffer. If the stream if freezing or getting artifacts,
# it is likely because of network jitter. This sets a constant latency on each
# incoming video frame to absorb and smooth the jitter.
webrtc.set_property("latency", 100)

# ICE transport policy controls whether direct P2P or TURN relay is allowed.
#   "all"   (default): allow direct candidates (host/srflx) and TURN relay
#   "relay": force TURN-only (mainly for testing)
webrtc.set_property("ice-transport-policy", "all")

# True: freezes on last good frame until a keyframe arrives
# False: shows distorted frames instead
vp8depay.set_property("wait-for-keyframe", False) 
```
### Video Settings
To update resolution, fps or format, modify capsfilter that is connected to libcamerasrc:
```python
src = Gst.ElementFactory.make("libcamerasrc", f"libcamerasrc{i}")
src.set_property("camera-name", cam_name)

caps = Gst.Caps.from_string("video/x-raw,format=YUY2,width=1280,height=720,framerate=30/1")
```

### Codec
To change the codec, change encoder/decoder and payloader/depayloader:
```python
#Video
vp8enc = Gst.ElementFactory.make("vp8enc", f"vp8enc{i}")
pay = Gst.ElementFactory.make("rtpvp8pay", f"pay{i}")
vp8depay = Gst.ElementFactory.make('rtpvp8depay', f'vp8depay_{stream_id}')
vp8dec = Gst.ElementFactory.make('vp8dec', f'vp8dec_{stream_id}')

#Audio
opus_enc = Gst.ElementFactory.make("opusenc", "opus_enc")
rtp_pay = Gst.ElementFactory.make("rtpopuspay", "rtp_pay")
opusdepay = Gst.ElementFactory.make('rtpopusdepay', f'opusdepay_{stream_id}')
opusdec = Gst.ElementFactory.make('opusdec', f'opusdec_{stream_id}')
```

### Dynamic Pipeline Configuration
- Client can toggle incoming audio
- Clients can select which cameras to stream
- Supports 1 or 2 simultaneous streams
- Each camera gets its own encoding pipeline
- Real-time switching between camera combinations

To start connection process and configure stream contents, the client sends a message with these properties:

- `type`: Message type (always "Negotiate" for initial connection)
- `cameras`: Array of camera indices to stream (0 and/or 1)
- `audio`: Boolean to enable/disable robot sending audio.

## Related Documentation

- [GStreamer Repository](https://github.com/kscalelabs/gstreamer) - Complete implementation details
- [GStreamer Documentation](https://gstreamer.freedesktop.org/documentation/) - Framework reference
