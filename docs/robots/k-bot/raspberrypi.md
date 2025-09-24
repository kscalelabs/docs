---
sidebar_position: 6
---

# Raspberry Pi Image

This guide explains how to create a new Raspberry Pi Micro SD Card.

## Prerequisites

- Minimum of 32 GB MicroSD Card
- 64 GB is preferred 

## Overview

### Flashing Raspberry Pi OS and Initial Configuration

Start by installing Raspberry Pi OS (64-bit) on the MicroSD Card using the rpi-imager if you are on Linux.

You should configure the installation with whichever username or hostname you would like. We typically use `dpsh` for the username and name the hostname after the current robot revision followed by the robot number. In this case, we would call it `kd-X` where `X` ranges from 1 to 10.

You can also set up the wifi and enable ssh in the configuration before you start writing the OS to the MicroSD Card.

Once the MicroSD Card is ready, you can install it into the Raspberry Pi 5 and boot it up.

### Installing Packages in a Virtual Environment

After the pi has booted, ssh into it.

The run the following commands:

```bash
sudo apt install fzf can-utils pkg-config vim git 
```

Next install [Rust](https://www.rust-lang.org/tools/install)

Afterwards create a virtual environment and run the following commands

```bash
pip install numpy inputs rich onnxruntime python-periphery serial maturin cffi
```

and then start cloning the following repos.

[robstride](https://github.com/kscalelabs/robstride.git)

[firmware](https://github.com/kscalelabs/firmware.git)

[kbot_deployment](https://github.com/kscalelabs/kbot_deployment.git)

(Optional) [klog](https://github.com/kscalelabs/klog.git)

To install the repos, follow the following instructions:

```bash
cd robstride/python
maturin develop
```

```bash
cd firmware
cargo build --release
cp target/release/faux_rtos ~/kbot_deployment
```

Download the policies from [here](https://drive.google.com/drive/folders/1dsPG71_O6NO1QQJI__rrumO6KRzvx0Wz?usp=sharing)
