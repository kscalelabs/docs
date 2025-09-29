---
sidebar_position: 7
---

# Zeroing the Actuators

This guide explains how to change the id of motors and zero the Robstride Actuators. This is mainly used after you have repaired a robot by swapping actuators.

## Prerequisites

- [Robstride CAN to USB debugging module](https://www.aliexpress.us/item/3256807756256932.html?gps-id=pcStoreLeaderboard&scm=1007.22922.271278.0&scm_id=1007.22922.271278.0&scm-url=1007.22922.271278.0&pvid=e6d847ad-6fda-4920-933d-52eed77ab9e1&_t=gps-id%3ApcStoreLeaderboard%2Cscm-url%3A1007.22922.271278.0%2Cpvid%3Ae6d847ad-6fda-4920-933d-52eed77ab9e1%2Ctpp_buckets%3A668%232846%238112%231997&pdp_ext_f=%7B%22order%22%3A%2224%22%2C%22eval%22%3A%221%22%2C%22sceneId%22%3A%2212922%22%2C%22fromPage%22%3A%22recommend%22%7D&pdp_npi=6%40dis%21USD%2133.38%2133.38%21%21%21236.41%21236.41%21%40210337c117587547672122521efcdb%2112000046389474672%21rec%21US%21%21ABXZ%211%210%21n_tag%3A-29910%3Bd%3A2e201d5d%3Bm03_new_user%3A-29895&spm=a2g0o.store_pc_home.smartLeaderboard_2008097548487.1005007942571684&gatewayAdapt=glo2usa)
- JST connectors

## Overview

You will need to download the [Motor Studio](https://github.com/RobStride/MotorStudio) under the Releases. It currently supports Windows and Linux. The instructions are located in the github.

Next you will need to take off the red JST connector on the limb that has the replaced motor.

Then you should connect the JST connector to the Robstride USB CAN tool and scan for the actuators. The new actuator should show up as id 127. You should take a look at the K-Bot Motor Mapping diagram below and assign it the correct id.

![K-Bot Motor Mapping](./assets/motors.jpg)

Then you should download the current version of the actuator firmware from the github releases [here](https://github.com/RobStride/Product_Information/releases) and upload the firmware using the motor studio.

Next you should look at the parameter table of the actuator that you replaced and update the zero offset parameter with the value from the table below.

| Actuator id           | Offset |
| --------------------- | ------ |
| 11 (L Shoulder Pitch) | -3.491 |
| 12 (L Shoulder Roll)  | -1.658 |
| 13 (L Shoulder Yaw)   | -1.672 |
| 14 (L Elbow Pitch)    | 0      |
| 15 (L Wrist)          | -1.378 |
| 21 (R Shoulder Pitch) | -2.802 |
| 22 (R Shoulder Roll)  | 1.658  |
| 23 (R Shoulder Yaw)   | 1.672  |
| 24 (R Elbow Pitch)    | 0      |
| 25 (R Wrist)          | 1.378  |
| 31 (L Hip Pitch)      | -2.216 |
| 32 (L Hip Roll)       | -2.268 |
| 33 (L Hip Yaw)        | -1.571 |
| 34 (L Knee Pitch)     | 0      |
| 35 (L Ankle Pitch)    | -0.262 |
| 41 (R Hip Pitch)      | 2.216  |
| 42 (R Hip Roll)       | 2.269  |
| 43 (R Hip Yaw)        | 1.571  |
| 44 (R Knee Pitch)     | 0      |
| 45 (R Ankle Pitch)    | 0.262  |

Next you will need to move the robot into the zeroing position as shown in the video below.

<iframe width="315" height="560" src="https://www.youtube.com/embed/uWSWjA6e7fM" title="K-Bot Zeroing Position" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Finally, while 1 person holds the robot's elbow straight, another person should run the following commands:

```bash
conda activate robstride
robstride -i can0,can1,can2,can3,can4,can5,can6 zero --ids 11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45
```

Finally, you can move the robot manually to near the zero position and check the position of each actuator. If any of them are far from zero, you should re zero them manually using the robstride motor tool.

```bash
robstride -i can0,can1,can2,can3,can4,can5,can6 state --ids 11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45
```
