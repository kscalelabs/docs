---
sidebar_position: 2
---

# Bill of Materials

## Electronics

| Part               | Description                                     | Link                                                                                                                                                                | Quantity | Total Cost (USD)                                                 | Date Decided |
| ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------- | ------------ |
| Serial Bus Servo   | \*STS3250 50KG Serial Bus Servo                 | [STS3250](https://www.aliexpress.us/item/3256806337383027.html?gatewayAdapt=glo2usa4itemAdapt)                                                                      | x16      | Depends by Seller due to Supply Chain Issues. Previously: 222.24 | 9/10         |
| Controller         | Milk-V                                          | [Link](https://milkv.io/duo-s)                                                                                                                                      | x1       | 10                                                               | 11/14        |
| Servo driver board | Waveshare Bus Servo Adapter                     | [Link](https://www.waveshare.com/bus-servo-adapter-a.htm)                                                                                                           | x1       | 7                                                                | 10/05        |
| LCD IMU            | RP2040 MCU Board                                | [Link](https://www.waveshare.com/rp2040-lcd-1.28.htm)                                                                                                               | x1       | 16                                                               | 10/03        |
| IMU                | 9-DOF IMU                                       | [Link](https://www.adafruit.com/product/4646)                                                                                                                       | x1       | 29.95                                                            | 11/14        |
| Camera             | Milk-V CAM-GC2083                               | [Link](https://arace.tech/products/milk-v-cam-gc2083)                                                                                                               | x1       | 4                                                                | 10/05        |
| Battery            | RC Lipos                                        | [Link](https://www.amazon.com/KBT-1200mAh-Rechargeable-Replacement-Compatible/dp/B0C23Y3VZK?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A3FKMD6P089KQA&th=1) | x1       | 33                                                               | 11/14        |
| 12V to 5V          | 12V to 5V, 3 amp capacity (may need connectors) | [Link](https://www.digikey.com/en/products/detail/dfrobot/DFR0571/9559261)                                                                                          | x1       | 3                                                                | 9/24         |
| Microphone         | Electret Microphone                             | [Link](https://www.amazon.com/Ferwooh-Electret-Microphone-Amplifier-Adjustable/dp/B0D17R3L7K/)                                                                      | x1       | 6                                                                | 11/01        |
| Speaker            | 3 Watt Speaker                                  | [Link](https://www.amazon.com/CQRobot-JST-PH2-0-Interface-Electronic-Projects/dp/B0822Z4LPH/)                                                                       | x1       | 8                                                                | 11/14        |
| Amplifier          | LM386 Mono Audio Amplifier                      | [Link](https://www.amazon.com/HiLetgo-LM386-Audio-Amplifier-Module/dp/B00LNACGTY/)                                                                                  | x1       | 8                                                                | 11/01        |

\*The STS3215 45RPM servos are no longer sufficient for the speed requirements of the legs. Please use the STS3250 servos as we look for a suitable replacement.

## Fasteners

The robot is joined together by M3 screws for all of the motor outputs, and M2 screws for all of the motor housings. The same fastener sizes have been used for the other structural joints as well, as was possible.

Button head cap screws were preferred for being low-profile around critical joints; Phillips-head drives are generally sufficient. Socket-head screws and hex-drive screws are also likely acceptable where clearance is not a concern.

The gross screw counts are as follows:

| Type                  | Size\* | Length (mm) | Quantity | Description                      |
| :-------------------- | :----- | :---------- | :------- | :------------------------------- |
| Button Head Cap Screw | M3     | 10          | 14       | Structural Joints etc.           |
| Button Head Cap Screw | M3     | 4.5         | 129      | Motor Outputs, Motor Axles, etc. |
| Button Head Cap Screw | M2     | 5           | 80       | Motor Housings                   |
| Socket Head Cap Screw | M2     | 5           | 12       | Board Mounts                     |
| Heat-Set Insert       | M3     |             | 13       | Torso etc.                       |
| Heat-Set Insert       | M2     |             | 14       | Electronics Carriage             |

\*standard Coarse thread pitch

_An Itemized BoM is publicly available[ here](https://docs.google.com/spreadsheets/d/1CmScSyjjHeuxxL0QmV3nXdUUqKY3HEEfBCJPlzzbGro/edit?gid=500144392#gid=500144392)_

For metal-on-metal screw joints, we recommend using low-strength removeable threadlocker (_Loctite Purple_). Medium-strength may present issues on disassembly due to the small fastener sizes. High-strength should be avoided.

See the Assembly Guide for more information on heat-set inserts etc.

_A Note:_ The above assumes using STS3250 motors, with an aluminum body. If using STS3215's, with a plastic housing, most holes are _not_ pre-tapped; you may be able to still use a regular screw, but self-tapping screws will make for an easier assembly process. Specifically:

- The non-drive side ('bushing') axle screw on the 3215 will not be tapped. A regular screw may still be used on the drive side (with the splined output shaft).
- The mounting holes will not be tapped, so all machine screw M2's intended for the motor housings may need converted to the self-tapping equivalent.
