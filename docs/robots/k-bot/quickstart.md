---
sidebar_position: 1
---

# Quickstart

This guide will help you get your K-Bot up and running quickly.

## Prerequisites

- K-Bot robot hardware
- Network access to the robot's WiFi

## Step 1: Connect to the Robot

1. **Connect to WiFi**: Join the `kd-1` or `kd-7` WiFi network

   - **Password**: `stayhuman`

2. **SSH into the robot**:
   ```bash
   ssh dpsh@192.168.1.1
   ```
   - **Password**: `stayhuman`

## Step 2: Set Up CAN Interfaces

1. **Activate the robstride environment**:

   ```bash
   conda activate robstride
   ```

2. **Set up CAN interfaces**:

   ```bash
   ./kscale/robstride/set_can.sh
   ```

3. **Scan for motors on all CAN interfaces**:

   ```bash
   robstride -i can0,can1,can2,can3,can4,can5,can6 scan
   ```

   💡 **Tip**: Use `Ctrl+R` to search through command history

## Step 3: Identify Motor Layout

Look for which motors are on which CAN interfaces. You should see patterns like:

- `can1` might have 40s motors
- `can2` might have 30s motors
- `can3` might have 20s motors
- `can4` might have 10s motors

## Step 4: Configure CAN Interface Order

Set the CAN interfaces in the correct order (typically 10s, 20s, 30s, 40s):

```bash
export CAN_INTERFACES=can4,can3,can2,can1
```

Replace the interface names with the actual ones you found in the scan.

## Step 5: Run the Standing Policy

1. **Activate the klog environment**:

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
2. **Verify home position** - Make sure the robot is properly positioned
3. **Remove from stand** - Take the robot off its stand
4. **Press Enter once more** - This will start the policy and the robot should begin standing

## Troubleshooting

- If you can't find the WiFi network, check that the robot is powered on
- If SSH connection fails, verify the IP address and network connection
- If motors aren't detected, check CAN interface connections
- If the robot doesn't move to home position, verify all motors are properly connected

## Next Steps

Once your K-Bot is standing successfully, you can explore more advanced policies and configurations in the other documentation sections.
