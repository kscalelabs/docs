---
sidebar_position: 2
---

# Mechanical System

:::note

The K-Bot hardware and software is still under active development and improvement.

**License**
The hardware components of this project are licensed under CERN-OHL-S while the software components are licensed under GPL v3, unless otherwise specified. See [LICENSE-HW](https://github.com/kscalelabs/kbot/blob/master/LICENSE-HW) and [LICENSE](https://github.com/kscalelabs/kbot/blob/master/LICENSE), respectively.

:::

## Bill of Materials

The BoM Spreadsheet is [here](./assets/Kbot_BOM.xlsx)

Fasteners, hardware, as well as fabricated hardware components are all listed there. 

Parts are indicated as follows `KD-E-105X`: KD indicates the version number of the K-Bot (K for K-Bot and D is for the fourth iteration). E indicates which subassembly the part or hardware is found in; E is for head, D is for legs, C is for arms, and B is for torso. Parts with `F` as the suffix are fasteners. 

The fabricated parts are available online at Onshape through our [public release](https://cad.onshape.com/publications/e15cf8edefacbba3009917c0/), or also as a zip file that can be downloaded [here](./assets/KBot_Parts.zip).

If you use Onshape, the file with the feature trees are here:
- [K-Bot Legs](https://cad.onshape.com/documents/56df9b1704928b974a7d6785/w/5b4e7939b4075909e2f1e83f/e/0f3313ac1d4663a7156d6caf)
- [K-Bot Torso](https://cad.onshape.com/documents/e67e31c953683019c4393bdc/w/b284b0f5698d77710f656522/e/852af025128c1979f42b0ca0)
- [K-Bot Arms](https://cad.onshape.com/documents/dc61a03ca9769ab30757c4f4/w/36f75f10f978d5ba193c09ca/e/da97515661ec177734456c1c)
- [K-Bot Head](https://cad.onshape.com/documents/9e38678113e126dd34263131/w/3f66fe0d46617a4699795e2e/e/bca55e9af9315a31c22f72b3)
- [K-Bot Upper Torso Mount](https://cad.onshape.com/documents/fb0aa6ee83b37e4a41f5914b/w/83cdcf0f90bc459a98f314ce/e/eddb329de88fd387b338143e)
- [K-Bot Assy](https://cad.onshape.com/documents/3c96361770f38d5b0d3868f1/w/9470282c10c48cb8491ca2c4/e/fc57abbe4012b0f64cb8d794)


You can find this [helpful spreadsheet](./assets/KBot_UID_to_Pic.xlsx) that has the picture alongside the part number. There is also a Chinese name for each part which may be useful if you are working with overseas CNC suppliers to get these parts made yourself.

## Actuators

Here are the actuators we use from [Robstride](https://robstride.com/). The exact location and how they are id'd are in the next page (Motor ID Mapping). 


|  | Count | Rated Load | Peak Load (10 seconds) | Weight | Gear Ratio |
| --- | --- | --- | --- | --- | --- |
| Robstride RS00 | 2 | 5 Nm | 14 Nm | 0.31 kg | 10:1 |
| Robstride RS02 | 6 | 6 Nm | 17 Nm | 0.38 kg | 7.75:1 |
| Robstride RS03 | 8 | 20 Nm | 60 Nm | 0.88 kg | 9:1 |
| Robstride RS04 | 4 | 40 Nm | 120 Nm | 1.42 kg | 9:1 |


## Manufacturing Tolerances

The main high tolerance part to be careful with is those which the bearing mounts in. The spec is described [here](./assets/KBot_KD_Bearing_bores.pdf). Otherwise, the general shop tolerances for CNC parts has been fine for us across the few shops we have made prototypes with.


## Assembly Guide

We have put together a simple guide for the order of the assembly and where each fastener go along with photos. The PDF can be found [here](./assets/kbot_assembly_guide.pdf).


## Wiring Harness

Lots of thought has been put into how we wire the robot (and it is still the least reliable part of the robot). As such, we have specific spec for the wires that should be used. It also involves customizing the RS03 and RS04 actuators as we find the default CAN plug to be unsuitable for our application. Find the specification of the wires in [this PDF](./assets/kbot_wiring.pdf). 

## Battery

Currently the K-Bot uses a 12 AH NCM battery. Each cell is 4V. There is also a BMS inside which communicates with the power board. The BMS current protection limit is set at 50A. You can see the mechanical parts for the battery component for the space available - its 135mm x 180mm x 65mm for the pack and 130mm x 20mm x 35mm for the BMS and plug.


## Joint Range

| Joint Name - KD | Min Angle (deg) | Max Angle (deg) |
| --- | --- | --- |
| dof_left_shoulder_pitch_03 | -60.000 | 200.000 |
| dof_left_shoulder_roll_03 | -25.000 | 95.000 |
| dof_left_shoulder_yaw_02 | -95.792 | 95.792 |
| dof_left_elbow_02 | -142.000 | 0.000 |
| dof_left_wrist_00 | -79.000 | 79.000 |
| dof_right_shoulder_pitch_03 | -200.000 | 60.000 |
| dof_right_shoulder_roll_03 | -95.000 | 25.000 |
| dof_right_shoulder_yaw_02 | -95.792 | 95.792 |
| dof_right_elbow_02 | -0.000 | 142.000 |
| dof_right_wrist_00 | -79.000 | 79.000 |
| dof_left_hip_pitch_04 | -60.000 | 127.000 |
| dof_left_hip_roll_03 | -130.000 | 12.000 |
| dof_left_hip_yaw_03 | -90.000 | 90.000 |
| dof_left_knee_04 | -0.000 | 155.000 |
| dof_left_ankle_00 | -15.000 | 65.000 |
| dof_right_hip_pitch_04 | -127.000 | 60.000 |
| dof_right_hip_roll_03 | -12.000 | 130.000 |
| dof_right_hip_yaw_03 | -90.000 | 90.000 |
| dof_right_knee_04 | -155.000 | 0.000 |
| dof_right_ankle_00 | -65.000 | 15.000 |

