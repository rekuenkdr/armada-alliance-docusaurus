# Enable P2P Networking

import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution
You will have to upgrade the whole pool to P2P in my experience. I could not get tx's out of my core until it had p2p enabled.
:::

:::info
Continue pushing your relay to topology updater without pulling in a list from them. This allows you to get incoming while keeping the p2p file as is.

just add the -f flag to your command.

```bash"
33 * * * * . $HOME/.adaenv; $HOME/pi-pool/scripts/topologyUpdater.sh -f
```

:::

https://github.com/cardano-foundation/docs-cardano-org/blob/main/explore-cardano/p2p-networking.md

Edit your mainnet-config.json. I add them just above ***"defaultBackends": [***. Testnets are already on P2P and you can find the configuration files here https://book.world.dev.cardano.org/environments.html

```bash title="mainnet-config.json"
  "EnableP2P": true,
  "MaxConcurrencyBulkSync": 2,
  "MaxConcurrencyDeadline": 4,
  "TargetNumberOfRootPeers": 50,
  "TargetNumberOfKnownPeers": 50,
  "TargetNumberOfEstablishedPeers": 25,
  "TargetNumberOfActivePeers": 20,
```

Edit the topology file on the core, raise valency to match the number of hot relays you wish to keep connection with. Lower valency will downgrade any extra nodes to a warm connection. The assumption is the governor will determine the best nodes to keep "hot".

```json title="mainnet-topology.json"

{
  "localRoots": [
    { "accessPoints": [
            { "address": "<Relay 1 IP or DNS hostname>", "port": 3001, "valency": 1, "name": "My relay"},
            { "address": "<Relay 2 IP or DNS hostname>", "port": 3002, "valency": 1, "name": "My other relay"}
  ],
      "advertise": false,
      "valency": 2
    }
  ],
  "publicRoots": []
}
```

Edit the topology file on the relays. The nodes only share block headers in P2P. If it does not have the block it will download it. This allows for more sensible interconnections, saving bandwidth while allowing interconnections between relays.

```json title="mainnet-topology.json"
{
  "localRoots": [
    { "accessPoints": [
      { "address": "<core>", "port": <core port>, "valency": 1, "name": ""},
      { "address": "100.74.99.36", "port": 6002, "valency": 1, "name": "M2"},
      { "address": "129.213.154.111", "port": 3002, "valency": 1, "name": "ANTRIX"},
      { "address": "150.230.20.186", "port": 3003, "valency": 1, "name": "ANTRIX"},
      { "address": "relay.pasklab.com", "port": 3004, "valency": 1, "name": "BERRY"},
      { "address": "100.114.28.4", "port": 3001, "valency": 1, "name": "mu gogo"},
      { "address": "34.68.210.168", "port": 3001, "valency": 1, "name": "mu gogo"},
      { "address": "59.28.90.17", "port": 3003, "valency": 1, "name": "merde guy"},
      { "address": "relay3.meritus.work", "port": 6000, "valency": 1, "name": "MERIT"},
      { "address": "193.123.107.52", "port": 6000, "valency": 1, "name": "Server in Vinhedo Brazil"}
    ],
      "advertise": true,
      "valency": 14
    }
  ],
  "publicRoots": [
    { "accessPoints": [
      { "address": "relays-new.cardano-mainnet.iohk.io", "port": 3001 }
    ],
    "advertise": true
    }
  ],
  "useLedgerAfterSlot": 45000000
}
```


Restart the node and check they are syncing up. Look for ('***Started opening Ledger DB***').

```bash title=">_ Terminal"
journalctl -f --output=cat -u cardano-node
```

You can reload the networking stack without having restart the service with this bash function. Add this to the bottom of your .bashrc file and source it.

```bash title=">_ Terminal"
nano ~/.bashrc
```
Add this to the bottom and source the changes into Bash. Change pidof to match the name of your cardano-node systemd service.

<Tabs groupId="CONFIG_NET">
  <TabItem value="SPOS" label="SPOS" default>

```bash title="~/.bashrc"
cardano-reload() {
   CPID=$(pidof cardano-node)
   kill -SIGHUP ${CPID}
   echo ${CPID}
}
```
  </TabItem>
  <TabItem value="CNTools" label="CNTools">

```bash title="~/.bashrc"
cardano-reload() {
   CPID=$(pidof cnode)
   kill -SIGHUP ${CPID}
   echo ${CPID}
}
```
  </TabItem>
</Tabs>

```bash title=">_ Terminal"
source ~/.bashrc
```
