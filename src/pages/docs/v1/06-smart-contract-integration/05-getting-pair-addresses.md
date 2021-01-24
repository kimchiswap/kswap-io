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

### Solidity

```solidity
address factory = 0x90AdEeeC27e184280763AA91CE25D13f7552Ac54;
address token0 = 0xCAFE000000000000000000000000000000000000; // change me!
address token1 = 0xF00D000000000000000000000000000000000000; // change me!

address pair = address(uint(keccak256(abi.encodePacked(
  hex'ff',
  factory,
  keccak256(abi.encodePacked(token0, token1)),
  hex'96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'
))));
```
