---
sidebar_position: 1
---

# K-Bot Motor ID Mapping

The K-Bot uses a specific motor ID mapping for its 12 degrees of freedom.

![K-Bot Motor Mapping](./assets/motors.jpg)

## Motor Layout

### Left Leg

- **Motor 0**: Left Hip Roll
- **Motor 1**: Left Hip Pitch
- **Motor 2**: Left Knee Pitch
- **Motor 3**: Left Ankle Pitch

### Right Leg

- **Motor 4**: Right Hip Roll
- **Motor 5**: Right Hip Pitch
- **Motor 6**: Right Knee Pitch
- **Motor 7**: Right Ankle Pitch

### Left Arm

- **Motor 8**: Left Shoulder Pitch
- **Motor 9**: Left Shoulder Roll
- **Motor 10**: Left Elbow Pitch

### Right Arm

- **Motor 11**: Right Shoulder Pitch
- **Motor 12**: Right Shoulder Roll
- **Motor 13**: Right Elbow Pitch

## Motor Specifications

| Motor ID | Joint Name           | Range (deg) | Max Torque (Nm) | Max Velocity (rpm) |
| -------- | -------------------- | ----------- | --------------- | ------------------ |
| 0        | Left Hip Roll        | -45 to 45   | 50              | 100                |
| 1        | Left Hip Pitch       | -90 to 90   | 50              | 100                |
| 2        | Left Knee Pitch      | -90 to 0    | 50              | 100                |
| 3        | Left Ankle Pitch     | -45 to 45   | 30              | 100                |
| 4        | Right Hip Roll       | -45 to 45   | 50              | 100                |
| 5        | Right Hip Pitch      | -90 to 90   | 50              | 100                |
| 6        | Right Knee Pitch     | -90 to 0    | 50              | 100                |
| 7        | Right Ankle Pitch    | -45 to 45   | 30              | 100                |
| 8        | Left Shoulder Pitch  | -90 to 90   | 20              | 100                |
| 9        | Left Shoulder Roll   | -90 to 90   | 20              | 100                |
| 10       | Left Elbow Pitch     | -90 to 0    | 20              | 100                |
| 11       | Right Shoulder Pitch | -90 to 90   | 20              | 100                |
| 12       | Right Shoulder Roll  | -90 to 90   | 20              | 100                |
| 13       | Right Elbow Pitch    | -90 to 0    | 20              | 100                |

## Programming Interface

### Setting Motor Positions

```python
import pykos

robot = pykos.Robot("k-bot")

# Set individual motor positions (in radians)
robot.set_motor_position(0, 0.5)  # Left hip roll
robot.set_motor_position(1, -0.3) # Left hip pitch

# Set all motor positions at once
positions = [0.0] * 14  # Initialize all motors to 0
positions[0] = 0.5      # Left hip roll
positions[1] = -0.3     # Left hip pitch
robot.set_motor_positions(positions)
```

### Reading Motor States

```python
# Get current motor positions
positions = robot.get_motor_positions()
print(f"Left hip roll: {positions[0]} rad")

# Get motor velocities
velocities = robot.get_motor_velocities()
print(f"Left hip roll velocity: {velocities[0]} rad/s")

# Get motor torques
torques = robot.get_motor_torques()
print(f"Left hip roll torque: {torques[0]} Nm")
```

## Safety Considerations

### Joint Limits

Always respect the joint limits to prevent damage:

```python
# Check if position is within limits
def is_position_valid(motor_id, position):
    limits = {
        0: (-0.785, 0.785),  # Left hip roll: -45 to 45 deg
        1: (-1.571, 1.571),  # Left hip pitch: -90 to 90 deg
        # ... other limits
    }

    min_limit, max_limit = limits[motor_id]
    return min_limit <= position <= max_limit

# Safe position setting
if is_position_valid(0, 0.5):
    robot.set_motor_position(0, 0.5)
else:
    print("Position out of range!")
```

### Emergency Stop

Always implement emergency stop functionality:

```python
# Emergency stop all motors
robot.emergency_stop()

# Or stop specific motors
robot.stop_motor(0)  # Stop left hip roll motor
```
