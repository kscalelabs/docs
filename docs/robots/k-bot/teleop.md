---
sidebar_position: 2
---

# Teleop

This guide covers teleoperation (remote control) of the K-Bot robot using VR controllers and hand tracking.

## Prerequisites

- K-Bot robot set up and running (see [Quickstart](./quickstart.md))
- VR headset (tested with Meta Quest, anything that can create webXR sessions in the browser will work)
- Computer
- Network connection to the robot and computer

## Overview

The K-Bot teleop system allows you to control the robot remotely using:
- **VR Controllers**: Better when using gripper end effectors. Trigger to close grippers and "X" to pause commands.
- **Hand Tracking**: Better for hand end effectors.
- **Video Streaming**: Currently only one video is displayed in front of the user, we are working on stereo vision.

The VR app switches seamlessly between controller and hand tracking during execution. If both hands are visible, hand-tracking will be used, if one hand + one controller or two controllers are visble, controller tracking will be used. You can not combine methods right now. 

## Setup

### 1. Create Web Server to Serve Web App to Headset

```bash
# Navigate to the teleop frontend
cd kscale_vr_teleop/frontend
npm install
npm run start-https
```

The `start-https` command creates an HTTPS proxy server that:
- **Runs on port 8443** (HTTPS server)
- **Forwards general traffic to port 8012** (React development server)
- **Forwards `/service2` requests to port 8013** (signaling server for WebRTC and inverse kinematics)

### 2. Run Signaling Server
```bash
# Navigate to the teleop backend
cd kscale_vr_teleop/src/kscale_vr_teleop
conda activate teleop
python signaling.py
```
- The signaling server will receive joint data from the headset via a wbsocket and forward commands to the robot using UDP.
- It will also launch a rerun window to visualize and log the robots movement.

### 3. Sanity Check
Navigate to https://YOUR_COMPUTER_IP:8443 and press the big orange "Connect" button

You should see:
- An orange screen (video is not streaming yet)
- Grippers that follow your hands. These represent your hands/controller's true position and the target for the inverse kinematics. They will fade between being green and red to represent how close the solution to the kinematics is to the real position.
- A URF of the KBot's upperbody following your controllers.
- URDF in rerun on the computer following your controllers.


### 4. Start Video Streaming
```bash
# Start the GStreamer Pipeline
source webrtc-pi-env/bin/activate
cd kscale_vr_teleop
python gstreamer.py
```

### 5. Use Correct Firmware Branch from https://github.com/kscalelabs/firmware/branches
With grippers: eric/5dof-with-grippers
Without grippers: eric/can-imu-emulator

```bash
# Compile Firwmare
cargo build --release
```
Move the output binary, faux-rtos to kbot_deployment

### 6. Initialize IMU Emulator
```bash
#you may need to run
sudo apt install socat
cd FIRMWARE_REPO/scripts/usb
sudo ./start.sh
```

### 7. Run Desired Policy in a Different Terminal
```bash
conda activate klog
export export IMU_DEV=/tmp/imu_emulator_in
cd kbot_deployment
./deploy_from_queue
#For hands or no end-effector, select confident_hugle.kinfer
#For grippers, select competent_feistel.kinfer
```
You will be prompted to press Enter 3 times. The second time will put the arms in a ready position. The third time will start tracking. Be careful, the robot will jump to your hand positions (if everything else is running) so make sure your arms are in an appropriate position. This is an easy way to slam your effectors into the body or table.


## Usage
1. Navigate to https://YOUR_COMPUTER_IP:8443
2. Enter your robot's IP in the text input
3. Press the orange "Connect" button
4. The URDF should be following your controllers. And the video feed should be in front of you.
5. Get your hands in an appropriate position
6. Press enter for the 3rd time in the ./deploy_from_queue terminal.
7. Control the robot!