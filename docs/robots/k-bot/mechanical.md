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

Parts are indicated as follows `KD-H-105X`: KD indicates the version number of the K-Bot (D is the fourth iteration). H indicates which subassembly the part or hardware is found in; E is for head, D is for legs, C is for arms, and B is for torso. Parts with `F` as the suffix are fasteners. 

The fabricated parts are available online at Onshape through our [public release](https://cad.onshape.com/publications/e15cf8edefacbba3009917c0/), or also as a zip file that can be downloaded [here](./assets/KBot_Parts.zip).

You can find this helpful spreadsheet that has the picture alongside the part number. There is also a Chinese name for each part which may be useful if you are working with overseas suppliers to get these parts yourself. It can be found [here](./assets/KBot_UID_to_Pic.xlsx).

## Actuators

Here are the actuators we use form Robstride. The exact location and how they are id'd are in the next page (Motor ID Mapping). 


|  | Count | Rated Load | Torque Constant | Peak Load (10 seconds) | Weight | Poles | Gear Ratio |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Robstride RS00 | 2 | 5 Nm | 2.09303607 Nm/A | 14 Nm | 0.31 kg | 28 poles | 10:1 |
| Robstride RS02 | 6 | 6 Nm | 1.72534055 Nm/A | 17 Nm | 0.38 kg | 28 Poles | 7.75:1 |
| Robstride RS03 | 8 | 20 Nm | 3.33754401 Nm/A | 60 Nm | 0.88 kg | 42 Poles | 9:1 |
| Robstride RS04 | 4 | 40 Nm | 2.1 Nm/Arms = 2.1 * sqrt(2) = 2.96984848 | 120 Nm | 1.42 kg | 42 Poles | 9:1 |

## Manufactruing Tolerances

The main high tolerance part to be careful with is those which the bearing mounts in. The spec is described [here](./assets/KBot_KD_Bearing_bores.pdf)


## Assembly Guide

We have put together a simple guide for the order of the assembly and where each fastener go along with photos. The PDF can be found [here](./assets/kbot_assembly_guide.pdf).

