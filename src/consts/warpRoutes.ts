import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      addressOrDenom: '0x999a146cF7AFE8C04293d6ccdF5f6007Ff8a8570',
      chainName: 'arbitrumsepolia',
      collateralAddressOrDenom: '0x68B71312187C576224ae7563B1dE3De359CA607b',
      connections: [
        {
          token: 'ethereum|chronicleyellowstone|0xFce36628A5d64c985BB92DdEE7A5f64b8115eF3F',
        },
      ],
      decimals: 18,
      name: 'Lit Yellowstone Test Token',
      standard: TokenStandard.EvmHypCollateral,
      symbol: 'tstLPX',
    },
    {
      addressOrDenom: '0xFce36628A5d64c985BB92DdEE7A5f64b8115eF3F',
      chainName: 'chronicleyellowstone',
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|0x999a146cF7AFE8C04293d6ccdF5f6007Ff8a8570',
        },
      ],
      decimals: 18,
      name: 'Lit Yellowstone Test Token',
      standard: TokenStandard.EvmHypNative,
      symbol: 'tstLPX',
    },
    {
      addressOrDenom: '0x4E3D05EA769464245be8CEeeDBE2E78bec543Ed1',
      chainName: 'chronicleyellowstone',
      connections: [
        {
          token: 'ethereum|optimismsepolia|0x53B886349F69Ea6b4E24143B738128aB572Dd361',
        },
      ],
      decimals: 18,
      name: 'Test LPX',
      standard: TokenStandard.EvmHypNative,
      symbol: 'tstLPX',
    },
    {
      addressOrDenom: '0x53B886349F69Ea6b4E24143B738128aB572Dd361',
      chainName: 'optimismsepolia',
      connections: [
        {
          token: 'ethereum|chronicleyellowstone|0x4E3D05EA769464245be8CEeeDBE2E78bec543Ed1',
        },
      ],
      decimals: 18,
      name: 'Test LPX',
      standard: TokenStandard.EvmHypSynthetic,
      symbol: 'tstLPX',
    },
    {
      addressOrDenom: '0x53B886349F69Ea6b4E24143B738128aB572Dd361',
      chainName: 'basesepolia',
      connections: [
        {
          token: 'ethereum|chronicleyellowstone|0x90e117B2f0f8635A0e35e5a265Ff5E32DcD1CF67',
        },
        {
          token: 'ethereum|polygonamoy|0x53B886349F69Ea6b4E24143B738128aB572Dd361',
        },
        {
          token: 'ethereum|sepolia|0x415392717924bC169EebB80e43e7e6eB717AF1e8',
        },
      ],
      decimals: 18,
      name: 'Test LPX',
      standard: TokenStandard.EvmHypSynthetic,
      symbol: 'tstLPX',
    },
    {
      addressOrDenom: '0x90e117B2f0f8635A0e35e5a265Ff5E32DcD1CF67',
      chainName: 'chronicleyellowstone',
      connections: [
        {
          token: 'ethereum|basesepolia|0x53B886349F69Ea6b4E24143B738128aB572Dd361',
        },
        {
          token: 'ethereum|polygonamoy|0x53B886349F69Ea6b4E24143B738128aB572Dd361',
        },
        {
          token: 'ethereum|sepolia|0x415392717924bC169EebB80e43e7e6eB717AF1e8',
        },
      ],
      decimals: 18,
      name: 'Test LPX',
      standard: TokenStandard.EvmHypNative,
      symbol: 'tstLPX',
    },
    {
      addressOrDenom: '0x53B886349F69Ea6b4E24143B738128aB572Dd361',
      chainName: 'polygonamoy',
      connections: [
        {
          token: 'ethereum|basesepolia|0x53B886349F69Ea6b4E24143B738128aB572Dd361',
        },
        {
          token: 'ethereum|chronicleyellowstone|0x90e117B2f0f8635A0e35e5a265Ff5E32DcD1CF67',
        },
        {
          token: 'ethereum|sepolia|0x415392717924bC169EebB80e43e7e6eB717AF1e8',
        },
      ],
      decimals: 18,
      name: 'Test LPX',
      standard: TokenStandard.EvmHypSynthetic,
      symbol: 'tstLPX',
    },
    {
      addressOrDenom: '0x415392717924bC169EebB80e43e7e6eB717AF1e8',
      chainName: 'sepolia',
      connections: [
        {
          token: 'ethereum|basesepolia|0x53B886349F69Ea6b4E24143B738128aB572Dd361',
        },
        {
          token: 'ethereum|chronicleyellowstone|0x90e117B2f0f8635A0e35e5a265Ff5E32DcD1CF67',
        },
        {
          token: 'ethereum|polygonamoy|0x53B886349F69Ea6b4E24143B738128aB572Dd361',
        },
      ],
      decimals: 18,
      name: 'Test LPX',
      standard: TokenStandard.EvmHypSynthetic,
      symbol: 'tstLPX',
    },
  ],
  options: {},
};
