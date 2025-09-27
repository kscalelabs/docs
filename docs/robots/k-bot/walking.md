---
sidebar_position: 6
---

# Walking Policy

This guide is a quick start for utilizing the walking policy that we have developed.

## Prerequisites

- Print out this [headless mount](https://drive.google.com/file/d/1PrhU7G5c-PSf1LY0Z4_e-dQ44iBOpmPD/view?usp=sharing) 

## Overview

## Step 1: Follow the quick start instructions up until the standing policy

1. **Start the keyboard control in another terminal of the robot**:
   ```bash
   cd kbot_deployment
   python kbot_control/keyboard.py
   ```

2. **Run the walking policy**:
   ```bash
   ./scripts/run ./policies/eloquent_ride.kinfer
   ```

## Step 2: Initialize the Robot

1. **Press Enter twice** - The robot should move to the home position
2. **Verify home position** - Make sure the robot is properly positioned and that each motor is using torque to keep position
3. **Remove from stand** - Lift the robot off its stand or set it down on the floor using a gantry and hold it so that the torso is vertical and not tilting
4. **Press Enter once more** - This will start the policy and the robot should begin standing

## Step 3: Use the keyboard controls to teleoperate the robot

1. **You must first click on the keyboard control terminal** - The keyboard controls are: arrow keys up and down control the command magnitude. 'w, a, s, and d' control the x and y velocity. 'q and e' control the yaw velocity. 
2. :warning: For our policy `eloquent_ride`, you should set the command magnitude to 0.2 and only rotating in place and walking side to side work well. Walking forwards and backwards is still under development. In addition you can test out controlling the arms at the same time with the [joystick16.py](https://github.com/kscalelabs/kbot_deployment/blob/dev-bart/kbot_control/joystick16.py) script.
