

# Hardware

## Resource Requirements

This page will consist of hardware necessary for running a stake pool or relay node on the cardano blockchain for both testnet and mainnet use.


As of "insert current date XD" the cardano-node/cli software requirements are:

:::caution
#### The RAM, CPU, and Data Storage resource requirements are much higher for mainnet vs testnet. If you decide to use a Raspberry Pi 4 or any other single board computer with limited RAM on mainnet you will experience downtime due to things like garbage collection or end of epoch calculations and need to monitor your node frequently to restart it once it hits its limits.
:::

## Testnet
| CPU             | RAM         | Disk Space/Storage |
|-----------------|-------------|--------------------|
| 2 or more cores | 4GB or more | 75GB or more       |

## Mainnet
| CPU             | RAM          | Disk Space/Storage |
|-----------------|--------------|--------------------|
| 2 or more cores | 16GB or more | 150GB or more      |






## Hardware Recommendation List

| **Name**                        | **Mainnet use** | **Testnet use** | **Link** |
|---------------------------------|-----------------|-----------------|----------|
| Mac Mini M1 16 GB RAM           | YES             | YES             |          |
| Mac Mini M1 8 GB RAM            | NO              | YES             |          |
| Honeycomb LX2 up to 64 GB RAM   | YES             | YES             |          |
| Firefly ROC-RK3588S-PC 16GB RAM | YES             | YES             |          |
| Raspberry Pi 4 8GB RAM          | NO              | YES             |          |
