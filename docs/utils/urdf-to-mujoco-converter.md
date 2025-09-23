---
title: Onshape to URDF Converter
excerpt: K-Scale's toolkit for converting Onshape files to URDFs.
deprecated: false
hidden: false
metadata:
  robots: index
---

See the source code for this repository [here](https://github.com/kscalelabs/onshape) .

# Getting Started

## Dependencies

The `onshape` package requires Python 3.11 or greater.

## Installation

`onshape` can be installed through `pip` using the following command:

```bash
pip install onshape  # To install the vanilla version
pip install 'onshape[all]'  # To install with all dependencies
```

Verify that the package was installed correctly by checking that the `onshape` CLI is available:

```text
$ onshape
usage: onshape {run,download,postprocess,pybullet,mujoco}
onshape: error: the following arguments are required: subcommand
```

Next, you should retrieve an Onshape Access Key and Secret Key from [here](https://cad.onshape.com/appstore/dev-portal) . Set the required environment variables like so:

```
export ONSHAPE_ACCESS_KEY='XXXXXXXXXXXXXXXXXXXXXXXX'
export ONSHAPE_SECRET_KEY='YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY'
```

# Usage

The Onshape CLI has the following components:

- `download` - takes a link to an Onshape assembly and downloads it as a URDF
- `postprocess` - takes a path to a downloaded URDF and applies postprocessing to make it useful
- `run` - Combines `download` and `postprocess` into a single script
- `pybullet` - Opens a Pybullet visualization of a generated URDF file, for debugging purposes
- `mujoco` - Opens a Mujoco visualization of a generated MJCF file, for debugging purposes

## Download

To download a URDF file, use the following command:

```
$ onshape download --help
usage: onshape [-h] [-o OUTPUT_DIR] [-f CONFIG_PATH] [-n] document_url

positional arguments:
  document_url          The URL of the OnShape document.

options:
  -h, --help            show this help message and exit
  -o OUTPUT_DIR, --output-dir OUTPUT_DIR
                        The output directory.
  -f CONFIG_PATH, --config-path CONFIG_PATH
                        The path to the config file.
  -n, --no-cache        Disables caching.
```

You can override configuration options from the command line by passing the values using [omegaconf syntax](https://omegaconf.readthedocs.io/) or by providing a configuration file.

## Postprocess

To postprocess a downloaded URDF file, use the following command:

```
$ onshape postprocess --help
usage: onshape [-h] [-f CONFIG_PATH] urdf_path

positional arguments:
  urdf_path             The path to the downloaded URDF.

options:
  -h, --help            show this help message and exit
  -f CONFIG_PATH, --config-path CONFIG_PATH
                        The path to the config file.
```

You can override the postprocess configuration arguments in the same way.

## Config File Reference

To view all the available configuration options, see [this file](https://github.com/kscalelabs/onshape/blob/master/onshape/onshape/config.py) .

**Ignore Welding Joints**

By default, fixture joints on the same body gets combined into one body. To avoid this you can set the following params:

```yaml
ignore_merging_fixed_joints:
  - "imu_link"
```

or

```yaml
merge_fixed_joints: false
```

# FAQ

How to update permission? After requesting permissions, remove \~/.kscale/

# Additional Resources

## Get Help

- [Github Issues](https://github.com/kscalelabs/onshape/issues)

## OnShape API

- [OnShape API Explorer Glassworks](https://cad.onshape.com/glassworks/explorer/)
- [OnShape API Documentation](https://onshape-public.github.io/docs/api-intro/)

## Other Tools

- [Rhoban's Onshape-to-Robot Github](https://github.com/Rhoban/onshape-to-robot)
