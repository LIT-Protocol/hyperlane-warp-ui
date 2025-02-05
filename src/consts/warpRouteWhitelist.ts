// A list of warp route config IDs to be included in the app
// Warp Route IDs use format `SYMBOL/chainname1-chainname2...` where chains are ordered alphabetically
// If left null, all warp routes in the configured registry will be included
// If set to a list (including an empty list), only the specified routes will be included
export const warpRouteWhitelist: Array<string> | null = [
  'tstLPX/arbitrumsepolia-chronicleyellowstone',
  'tstLPX/chronicleyellowstone-arbitrumsepolia',
  'tstLPX/chronicleyellowstone-optimismsepolia',
  'tstLPX/optimismsepolia-chronicleyellowstone',
  'tstLPX/basesepolia-chronicleyellowstone',
  'tstLPX/chronicleyellowstone-basesepolia',
  'tstLPX/basesepolia-optimismsepolia',
  'tstLPX/optimismsepolia-basesepolia',
  'tstLPX/basesepolia-polygonamoy',
  'tstLPX/chronicleyellowstone-polygonamoy',
  'tstLPX/polygonamoy-basesepolia',
  'tstLPX/polygonamoy-chronicleyellowstone',
  'tstLPX/basesepolia-sepolia',
  'tstLPX/sepolia-basesepolia',
  'tstLPX/sepolia-chronicleyellowstone',
  'tstLPX/chronicleyellowstone-sepolia',
  'tstLPX/sepolia-polygonamoy',
  'tstLPX/polygonamoy-sepolia',
  'tstLPX/sepolia-optimismsepolia',
  'tstLPX/optimismsepolia-sepolia',
  'tstLPX/sepolia-arbitrumsepolia',
  'tstLPX/arbitrumsepolia-sepolia',
];
// Example:
// [
//   // 'ETH/ethereum-viction'
// ];
