import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Static Build

:::info
This guide follows the same setup as our [Pi-Node guide and image](../pi-pool-tutorial/) so you may need to adjust sections based on your node's environment and setup.
:::

:::success
#### Current Official Cardano Node Version: 1.34.1
:::

### Overview 🗒

* [ ] Download Cardano Node Static build & configuration file
* [ ] Extract the file's content
* [ ] Check if you already have Cardano Node service running
  * Safely shutdown your Cardano node if it is running
* [ ] Replace the old binaries with the new cardano-node and cardano-cli
* [ ] Check cardano-node and cli version is updated to the current version
* [ ] Replace old configuration files with new ones (if needed)
* [ ] Restart your Cardano Node
* [ ] Check that node has started properly

## Download the cardano-node & cli

### Static binaries and Cardano node configuration files are provided by [\[ZW3RK\]](https://armada-alliance.com/identities/zw3rk) pool🙏 and can be found at our [Github repository](https://github.com/armada-alliance/cardano-node-binaries/tree/main/static-binaries).

```bash title=">_ Terminal"
wget -O 1_34_1.zip https://github.com/armada-alliance/cardano-node-binaries/blob/main/static-binaries/1_34_1.zip?raw=true
```

Extract the content from the zip file.

```bash title=">_ Terminal"
unzip 1_34_1.zip
```

### Check if cardano-node is running already

:::caution
**Now we need to make sure we do not have a cardano-node already running. If we do we must shut it down before proceeding.**
:::

You can check if you have a cardano-node process already running a few ways like using `htop` or by checking your systemd service.

If you have been following our [Pi-Node guide](../pi-pool-tutorial/) you can check your cardano-node status and stop it using the following commands.

```bash title=">_ Terminal"
cardano-service status
cardano-service stop
```

:::info
If you use Linux's `htop` service just check for a processing running starting with `cardano-node run` and use `SIGINT` to terminate the process.
:::

## Replace the old binaries and config files with the new ones

If you are using the [Pi-Node guide](../pi-pool-tutorial/) and your cardano-node & cli in `~/.local/bin`

```bash title=">_ Terminal"
mv cardano-node/* ~/.local/bin
```

### Check your cardano-node version

```bash title=">_ Terminal"
cardano-node --version
```

#### Output:

```bash title=">_ Terminal"
cardano-node 1.34.1 - linux-aarch64 - ghc-8.10
git rev 0000000000000000000000000000000000000000
```

### Check your cardano-cli version

```bash title=">_ Terminal"
cardano-cli --version
```

#### Output:

```bash title=">_ Terminal"
cardano-cli 1.34.1 - linux-aarch64 - ghc-8.10
git rev 0000000000000000000000000000000000000000
```

### Download & Replace the Cardano node configuration files (Optional)

:::info
This step is not needed every time you update your node, typically you only need to update/replace config files after hard fork events when moving into new eras of the [Cardano blockchain](https://roadmap.cardano.org/en/).
:::

<Tabs>
  <TabItem value="Mainnet" label="Mainnet" default> 

```bash title=">_ Terminal"
cd $NODE_FILES
wget https://hydra.iohk.io/build/7370192/download/1/mainnet-config.json
wget https://hydra.iohk.io/build/7370192/download/1/mainnet-byron-genesis.json
wget https://hydra.iohk.io/build/7370192/download/1/mainnet-shelley-genesis.json
wget https://hydra.iohk.io/build/7370192/download/1/mainnet-alonzo-genesis.json
wget https://hydra.iohk.io/build/7370192/download/1/mainnet-topology.json
```
  </TabItem>
  <TabItem value="Testnet" label="Testnet">

```bash title=">_ Terminal"
cd $NODE_FILES
wget https://hydra.iohk.io/build/7370192/download/1/testnet-config.json
wget https://hydra.iohk.io/build/7370192/download/1/testnet-byron-genesis.json
wget https://hydra.iohk.io/build/7370192/download/1/testnet-shelley-genesis.json
wget https://hydra.iohk.io/build/7370192/download/1/testnet-alonzo-genesis.json
wget https://hydra.iohk.io/build/7370192/download/1/testnet-topology.json
```
  </TabItem>
</Tabs>

## Download Database snapshot

:::info
Thanks to [OTG pool](https://armada-alliance.com/stake-pools/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae) for providing an up to date  snapshot of the Cardano blockchain to help speed up sync times for a node dramatically.
:::

```bash title=">_ Terminal"
cd $NODE_HOME && rm -rf db
wget -r -np -nH -R "index.html*" -e robots=off https://$NODE_CONFIG.adamantium.online/db/
```

## Restart the Cardano Node

Now we just need to restart our cardano-node service if you are using our [Pi-Node guide](../pi-pool-tutorial/) use this command

```bash title=">_ Terminal"
cardano-service start
```

Wait a few seconds or so then check the status

```bash title=">_ Terminal"
cardano-service status
```
