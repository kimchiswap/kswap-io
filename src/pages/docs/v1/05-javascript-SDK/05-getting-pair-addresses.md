---
title: Pair Addresses
---

# getPair

The most obvious way to get the address for a pair is to call <Link to='/docs/v1/smart-contracts/factory/#getpair'>getPair</Link> on the factory. If the pair exists, this function will return its address, else `address(0)` (`0x0000000000000000000000000000000000000000`).

- The "canonical" way to determine whether or not a pair exists.
- Requires an on-chain lookup.

# CREATE2

Thanks to some [fancy footwork in the factory](https://github.com/Kimchiswap/kswap-v1-core/blob/master/contracts/KswapV1Factory.sol#L32), we can also compute pair addresses _without any on-chain lookups_ because of [CREATE2](https://eips.ethereum.org/EIPS/eip-1014). The following values are required for this technique:

|                        |                                                                                 |
| :--------------------- | :------------------------------------------------------------------------------ |
| `address`              | The <Link to='/docs/v1/smart-contracts/factory/#address'>factory address</Link> |
| `salt`                 | `keccak256(abi.encodePacked(token0, token1))`                                   |
| `keccak256(init_code)` | `0x70de4b9e5466d1e419334f3dad662114eb11c455250fdb7e2b2a8cd9c0c623b8`            |

- `token0` must be strictly less than `token1` by sort order.

* Can be computed offline.
* Requires the ability to perform `keccak256`.

## Examples

### TypeScript

This example makes use of the <Link to='/docs/v1/SDK/getting-started/'>KSWAP SDK</Link>. In reality, the SDK computes pair addresses behind the scenes, obviating the need to compute them manually like this.

```typescript
import { FACTORY_ADDRESS, INIT_CODE_HASH } from '@kimchiswap/sdk'
import { pack, keccak256 } from '@ethersproject/solidity'
import { getCreate2Address } from '@ethersproject/address'

const token0 = '0xCAFE000000000000000000000000000000000000' // change me!
const token1 = '0xF00D000000000000000000000000000000000000' // change me!

const pair = getCreate2Address(
  FACTORY_ADDRESS,
  keccak256(['bytes'], [pack(['address', 'address'], [token0, token1])]),
  INIT_CODE_HASH
)
```
