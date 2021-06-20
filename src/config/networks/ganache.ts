import { EnvironmentSettings, ETHEREUM_NETWORK, NetworkConfig } from 'src/config/networks/network.d'
import { ETHGASSTATION_API_KEY } from '../../utils/constants'

const baseConfig: EnvironmentSettings = {
  txServiceUrl:
    'http://localhost:8000/api/v1/transactions/0xeddf9e61fb9d8f5111840daef55e5fde0041f5702856532cdbb5a02998033d26/',
  safeAppsUrl: 'http://localhost:3000',
  gasPrice: 10,
  gasPriceOracle: {
    url: '',
    gasParameter: 'average',
  },
  clientGatewayUrl: '',
  safeUrl: 'http://localhost:8000/api/v1/safes/0x4e59b44847b379578588920cA78FbF26c0B4956C',
  rpcServiceUrl: 'http://localhost:8545',
  networkExplorerName: '',
  networkExplorerUrl: '',
  networkExplorerApiUrl: '',
}

const ganache: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
      safeAppsUrl: '',
    },
    production: {
      ...baseConfig,
      txServiceUrl: '',
      safeAppsUrl: '',
    },
  },
  network: {
    id: ETHEREUM_NETWORK.GANACHE,
    backgroundColor: '',
    textColor: '',
    label: '',
    isTestNet: true,
    nativeCoin: {
      address: '',
      name: '',
      symbol: '',
      decimals: 0,
      logoUri: '',
    },
  },
  disabledFeatures: [],
  disabledWallets: [],
}

export default ganache
