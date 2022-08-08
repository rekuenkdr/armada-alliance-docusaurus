# Enable P2P Networking

import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution
You will have to upgrade the whole pool to P2P at the same time. I could not get tx's into my core node till P2P was enabled on it.
:::

Edit your mainnet-config.json or testnet-config.json. I add them just above ***"defaultBackends": [***.

```bash title="${NODE_CONFIG}-config.json"
"TestEnableDevelopmentNetworkProtocols": true,
"EnableP2P": true,
"MaxConcurrencyBulkSync": 2,
"MaxConcurrencyDeadline": 4,
"TargetNumberOfRootPeers": 50,
"TargetNumberOfKnownPeers": 50,
"TargetNumberOfEstablishedPeers": 25,
"TargetNumberOfActivePeers": 10,
```

Edit the topology file

<Tabs groupId="CONFIG_NET">
  <TabItem value="Testnet" label="Testnet P2P Relay" default>

```json title="testnet-topology.json"
{
  "LocalRoots": {
    "groups": [
      {
        "localRoots": {
          "accessPoints": [
             { "address": "<Block Producer IP or DNS hostname>", "port": 6000, "valency": 1, "name": "My Core Node"}
          ],
          "advertise": false
        }
      }
    ]
  },
  "PublicRoots": [
    {
      "publicRoots" : {
        "accessPoints": [
          { "address": "relays-new.cardano-testnet.iohkdev.io", "port": 3001, "valency": 2, "name": "IOG"}
        ],
        "advertise": true
      }
    }
  ],
  "useLedgerAfterSlot": 0
}
```

  </TabItem>
  <TabItem value="Mainnet" label="Mainnet P2P Relay">

```json title="mainnet-topology.json"
{
  "LocalRoots": {
    "groups": [
      {
        "localRoots": {
          "accessPoints": [
             { "address": "<Block Producer IP or DNS hostname>", "port": 3000, "valency": 1, "name": "My Core Node"}
          ],
          "advertise": false
        }
      }
    ]
  },
  "PublicRoots": [
    {
      "publicRoots" : {
        "accessPoints": [
          { "address": "relays-new.cardano-mainnet.iohkdev.io", "port": 3001, "valency": 2, "name": "OTG"}
        ],
        "advertise": true
      }
    }
  ],
  "useLedgerAfterSlot": 0
}
```

  </TabItem>
</Tabs>
<Tabs groupId="CONFIG_NET">
  <TabItem value="Testnet" label="Testnet P2P Core" default>

```json title="testnet-topology.json"
{
  "LocalRoots": {
    "groups": [
      {
        "localRoots": {
          "accessPoints": [
            { "address": "<Relay 1 IP or DNS hostname>", "port": 6001, "valency": 1, "name": "Server in Germany"},
            { "address": "<Relay 2 IP or DNS hostname>", "port": 6002, "valency": 1, "name": "Server in USA"}
          ],
          "advertise": false
        },
       "valency": 2
      }
    ]
  },
  "PublicRoots": []
}
```

  </TabItem>
  <TabItem value="Mainnet" label="Mainnet P2P Core">

```json title="mainnet-topology.json"
{
  "LocalRoots": {
    "groups": [
      {
        "localRoots": {
          "accessPoints": [
            { "address": "<Relay 1 IP or DNS hostname>", "port": 3001, "valency": 1, "name": "Server in Germany"},
            { "address": "<Relay 2 IP or DNS hostname>", "port": 3002, "valency": 1, "name": "Server in USA"}
          ],
          "advertise": false
        },
       "valency": 2
      }
    ]
  },
  "PublicRoots": []
}
```

  </TabItem>
</Tabs>

Restart the node and check they are syncing up. Look for ('***Started opening Ledger DB***').

```bash title=">_ Terminal"
journalctl -f --output=cat -u cardano-node
```

You can reload the networking stack without having restart the service with this bash function. Add this to the bottom of your .bashrc file and source it.

```bash title=">_ Terminal"
nano ~/.bashrc
```
Add this to the bottom and source the changes into Bash.

```bash title="~/.bashrc"
cardano-reload() {
   CPID=$(pidof cardano-node)
   kill -SIGHUP ${CPID}
   echo ${CPID}
}
```

```bash title=">_ Terminal"
source ~/.bashrc
```