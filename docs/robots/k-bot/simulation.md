---
sidebar_position: 10
---

# Simulation

This page outlines the various simulation frameworks that you can use to get started on training your own locomotion policies.

## Prerequisites

- Laptop or Desktop with a sufficient GPU or access to cloud GPUs like Runpod or Lambda

## Overview

We currently support 3 main simulation workflows.

## K-Sim

[K-Sim](https://github.com/kscalelabs/ksim) is built upon Mujoco's MJX simulator

<iframe width="560" height="315" src="https://www.youtube.com/embed/c64FnSvj8kQ" title="K-Bot Simulation Explainer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## IsaacLab

We are currently supporting IsaacSim 5.0. See our [reference repository](https://github.com/kscalelabs/isaaclab).

## IsaacGym

We currently support IsaacGym because many reference implementations for the Unitree G1 are written for IsaacGym and are being ported over to IsaacLab by the IsaacLab team at Nvidia
