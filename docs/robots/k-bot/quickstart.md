---
sidebar_position: 1
---

# Quickstart

This guide will help you get your K-Bot up and running quickly if you were given a Raspberry Pi 5 with a MicroSD card from us.

> :warning: Make sure to read everything we have written below as all the information is critical to proper operation of the KBot and just copying and pasting will not work.

## Prerequisites

- K-Bot robot hardware
- Network access to the robot's WiFi

Please first unpack the robot and connect all the wires according to the video below.

<iframe width="315" height="560" src="https://www.youtube.com/embed/A8VWp-WIV5A" title="K-Bot hardware setup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Step 1: Connect to the Robot

1. **Connect to WiFi**: Join the WiFi network that should be `kd-X` where `X` ranges from 1 to 10.

   - **Password**: `stayhuman`

2. **SSH into the robot**:
   ```bash
   ssh dpsh@192.168.1.1
   ```
   - **Password**: `stayhuman`

## Step 2: Set Up CAN Interfaces

1. **If you have robot `kd-4` or `kd-1`, you will need to activate the robstride environment and then run the set can script**:

   ```bash
   conda activate robstride
   ./kscale/robstride/set_can.sh
   ```

2. **If you have robot `kd-9`, you will just need to setup the CAN interfaces.**:

   ```bash
   ./robstride/set_can.sh
   ```

3. **Scan for motors on all CAN interfaces**:

   ```bash
   robstride -i can0,can1,can2,can3,can4,can5,can6 scan
   ```

   💡 **Tip**: Use `Ctrl+R` to search through command history

## Step 3: Identify Motor Layout

Look for which motors are on which CAN interfaces. You should see the robstride scan output something like:

```bash
Scanning can0 (IDs 10-50)...
   Found 5 actuators: [11, 12, 13, 14, 15]
Scanning can1 (IDs 10-50)...
   Found 5 actuators: [31, 32, 33, 34, 35]
Scanning can2 (IDs 10-50)...
   Found 5 actuators: [21, 22, 23, 24, 25]
Scanning can3 (IDs 10-50)...
   Found 5 actuators: [41, 42, 43, 44, 45]
Scanning can4 (IDs 10-50)...
   No actuators found
Scanning can5 (IDs 10-50)...
   No actuators found
Scanning can6 (IDs 10-50)...
   No actuators found

Scan complete: Found 20 total actuators across 4 interfaces
```

If 20 total actuators are not found, make sure you have run the `set_can.sh` above. If that does not resolve the issue, look at which actuators are missing using the [Motor ID Mapping](./motor-id-mapping.md) page and then you will need to take off the front large plate and verify that the red JST CAN connections on that limb are secure. We have seen cases where the connector in the elbow was pulled out and only 3 actuators were visible on that limb. In other cases, a connector that had frayed could cause the entire limb to be not visible. If that occurs, you will need to follow the troubleshooting or maintenance steps to identify which actuators are functioning.

> :warning: **WARNING**: Do not pull on the JST CAN connectors too hard from the actuators or they may rip off of the shoulder actuators and result in a very time-consuming replacement process.

## Step 4: Configure CAN Interface Order

Set the CAN interfaces in the correct order. You should list the can interfaces in the order of which has actuators in the 10s, 20s, 30s, and 40s. For example using the output from above, you should use the command:

```bash
export CAN_INTERFACES=can0,can2,can1,can3
```

If you are only using the upper body for teleoperation, then you can just list the CAN interfaces that the 10s and 20s are located on:

```bash
export CAN_INTERFACES=can0,can2
```

However, each robot is different so you will have to modify this command to make the robot properly work.

## Step 5: Run the Standing Policy

1. **If you have robot `kd-4` or `kd-1`, you will need to activate the klog environment**:

   ```bash
   conda activate klog
   ```

2. **Navigate to the deployment directory**:

   ```bash
   cd ~/kbot_deployment
   ```

3. **Run the standing policy**:
   ```bash
   ./scripts/run ./policies/stand_frozen.kinfer
   ```

## Step 6: Initialize the Robot

1. **Press Enter twice** - The robot should move to the home position
2. **Verify home position** - Make sure the robot is properly positioned and that each motor is using torque to keep position
3. **Remove from stand** - Lift the robot off its stand or set it down on the floor using a gantry and hold it so that the torso is vertical and not tilting
4. **Press Enter once more** - This will start the policy and the robot should begin standing

## Troubleshooting

- If you can't find the WiFi network, check that the robot is powered on
- If SSH connection fails, verify the IP address and network connection
- If motors aren't detected, check CAN interface connections
- If the robot doesn't move to home position, verify all motors are properly connected
- If the `./scripts/run` command exits instantly, check to make sure that the imu underneath the Raspberry Pi has been plugged in.

## Next Steps

Once your K-Bot is standing successfully, you can explore training your own policies and changing your configuration in the other documentation sections.
