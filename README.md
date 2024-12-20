# Fork of @web3-onboard/keystone
This fork fixes a bug with the web3-onboard/keystone package. The currently published npm version
is not compatible with yarn v4 and the installations that rely on that package manager are failing.
I've updated the @keystonehq/eth-keyring dependeny from 0.14.00.3 to 0.14.4 and with this yarn no
longer chokes on it. I also build the package so that it can be installed from the github repo.

# @web3-onboard/keystone

## Wallet module for connecting Keystone hardware wallets to web3-onboard

### Install

`npm i @web3-onboard/keystone`

### Options

```typescript
type KeystoneOptions = {
  customNetwork?: CustomNetwork
  filter?: Platform[]
  containerElement?: string
  /**
   * A number that defines the amount of consecutive empty addresses displayed
   * within the Account Select modal. Default is 5
   */
  consecutiveEmptyAccountThreshold?: number
}

interface CustomNetwork {
  networkId: number
  genesis: GenesisBlock
  hardforks: Hardfork[]
  bootstrapNodes: BootstrapNode[]
}

interface GenesisBlock {
  hash: string
  timestamp: string | null
  gasLimit: number
  difficulty: number
  nonce: string
  extraData: string
  stateRoot: string
}

interface Hardfork {
  name: string
  block: number | null
}

interface BootstrapNode {
  ip: string
  port: number | string
  network?: string
  chainId?: number
  id: string
  location: string
  comment: string
}
```

### Usage

```typescript
import Onboard from '@web3-onboard/core'
import keystoneModule from '@web3-onboard/keystone'

const keystone = keystoneModule()

const onboard = Onboard({
  // ... other Onboard options
  wallets: [
    keystone
    //... other wallets
  ]
})

const connectedWallets = await onboard.connectWallet()
console.log(connectedWallets)
```

### Filtering Platforms

You may decide that on certain platforms you do not want to display this wallet as a selectable option. To do that you can use the `filter` init option which is an array of platforms that you would like this wallet to **not** be displayed to the end user:

```typescript
import Onboard from '@web3-onboard/core'
import keystoneModule from '@web3-onboard/keystone'

const keystone = keystoneModule({ filter: ['Safari'] })

const onboard = Onboard({
  // ... other Onboard options
  wallets: [
    keystone
    //... other wallets
  ]
})

const connectedWallets = await onboard.connectWallet()
console.log(connectedWallets)
```

The following is a list of the platforms that can be filtered:

```typescript
type Platform =
  | 'Windows Phone'
  | 'Windows'
  | 'macOS'
  | 'iOS'
  | 'Android'
  | 'Linux'
  | 'Chrome OS'
  | 'Android Browser'
  | 'Chrome'
  | 'Chromium'
  | 'Firefox'
  | 'Microsoft Edge'
  | 'Opera'
  | 'Safari'
  | 'desktop'
  | 'mobile'
  | 'tablet'
```
