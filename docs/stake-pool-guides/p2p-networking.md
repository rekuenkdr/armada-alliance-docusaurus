# Enable P2P Networking

import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution
You will have to upgrade the whole pool to P2P at the same time. I could not get tx's into my core node till P2P was enabled on it.
:::

Edit your mainnet-config.json or testnet-config.json

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

<Tabs groupId="CONFIG_NET">
  <TabItem value="Testnet" label="Testnet P2P Relay" default>

```json title="testnet-topology.json"
{
  "LocalRoots": {
    "groups": [
      {
        "localRoots": {
          "accessPoints": [
             { "address": "<Block Producer IP or DNS hostname", "port": 6000, "valency": 1, "name": "My Core Node"}
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
             { "address": "<Block Producer IP or DNS hostname", "port": 3000, "valency": 1, "name": "My Core Node"}
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
          { "address": "otg-relay-1.adamantium.online", "port": 6001, "valency": 1, "name": "OTG"},
          { "address": "adarelay01.psilobyte.io", "port": 3001, "valency": 1, "name": "PSB"}
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
            { "address": "<Relay 1 IP or DNS hostname>", "port": 6001, "valency": 1, "name": "Your Core Example"},
            { "address": "<Relay 2 IP or DNS hostname>", "port": 6002, "valency": 1, "name": "Your Core Example"}
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
            { "address": "<Relay 1 IP or DNS hostname>", "port": 6001, "valency": 1, "name": "Your Core Example"},
            { "address": "<Relay 2 IP or DNS hostname>", "port": 6002, "valency": 1, "name": "Your Core Example"}
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
