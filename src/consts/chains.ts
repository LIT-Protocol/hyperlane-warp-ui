import {
  arbitrumsepolia,
  basesepolia,
  chronicleyellowstone,
  optimismsepolia,
  polygonamoy,
  sepolia,
} from '@hyperlane-xyz/registry';
import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  chronicleyellowstone: {
    ...chronicleyellowstone,
    rpcUrls: process.env.NEXT_PUBLIC_YELLOWSTONE_RPC_URL
      ? [{ http: process.env.NEXT_PUBLIC_YELLOWSTONE_RPC_URL }, ...chronicleyellowstone.rpcUrls]
      : chronicleyellowstone.rpcUrls,
  },
  arbitrumsepolia: {
    ...arbitrumsepolia,
    rpcUrls: process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL
      ? [{ http: process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL }, ...arbitrumsepolia.rpcUrls]
      : arbitrumsepolia.rpcUrls,
  },
  optimismsepolia: {
    ...optimismsepolia,
    rpcUrls: process.env.NEXT_PUBLIC_OPTIMISM_SEPOLIA_RPC_URL
      ? [{ http: process.env.NEXT_PUBLIC_OPTIMISM_SEPOLIA_RPC_URL }, ...optimismsepolia.rpcUrls]
      : optimismsepolia.rpcUrls,
  },
  sepolia: {
    ...sepolia,
    rpcUrls: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL
      ? [{ http: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL }, ...sepolia.rpcUrls]
      : sepolia.rpcUrls,
  },
  polygonamoy: {
    ...polygonamoy,
    rpcUrls: process.env.NEXT_PUBLIC_POLYGON_AMOY_RPC_URL
      ? [{ http: process.env.NEXT_PUBLIC_POLYGON_AMOY_RPC_URL }, ...polygonamoy.rpcUrls]
      : polygonamoy.rpcUrls,
  },
  basesepolia: {
    ...basesepolia,
    rpcUrls: process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL
      ? [{ http: process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL }, ...basesepolia.rpcUrls]
      : basesepolia.rpcUrls,
  },
  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 123123,
  //   domainId: 123123,
  //   name: 'mycustomchain',
  //   displayName: 'My Chain',
  //   nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   rpcUrls: [{ http: 'https://mycustomchain-rpc.com' }],
  //   blockExplorers: [
  //     {
  //       name: 'MyCustomScan',
  //       url: 'https://mycustomchain-scan.com',
  //       apiUrl: 'https://api.mycustomchain-scan.com/api',
  //       family: ExplorerFamily.Etherscan,
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 10,
  //   },
  //   logoURI: '/logo.svg',
  // },
};
