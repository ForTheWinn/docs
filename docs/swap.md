---
sidebar_position: 3
---

# FTWSwap

FTWSwap is a Decentralized Finance (DeFi) platform where users can convert assets, provide liquidity, and earn yield through staking. The FTWSwap token (NEP) functions as the rewards token users can earn by adding liquidity to liquidity pools and staking their liquidity pool tokens (LP tokens). The platform facilitates automated transactions between cryptocurrency tokens on the Neo N3 blockchain through the use of smart contracts.

## ASSET ACTIONS

The FTWSwap DeFi platform is compiled of several asset actions users can take: **Swap**, **Create a Pool**, **Add Liquidity**, **Remove Liquidity**, **Stake LP tokens**, and **Unstake**. Users can perform any of these actions in Swap and Farm pages.

### SWAP

Swap is FTWSwap's on-chain Auto Market Maker (AMM). FTWSwap's AMM adopts the Constant Product Market Maker (CPMM) model, which was popularized in many AMM-based DEXs, such as Uniswap and PancakeSwap. CPMMs are based on the function x∗y=kx*y=k, which establishes a range of prices for two tokens according to the available quantities (liquidity) of each token.
With the Swap action, users can swap any NEP17 tokens that created by liquidity providers available on the FTWSwap platform.

#### Slippage and Deadline

The **Slippage** is the amount (fixed 3%) a user is willing to lose when converting tokens. Converting tokens is a block-based action and anyone can execute the same swap directly before, on the same block. This can calculate the price incorrectly, and because of the number of trades on any given block, the transaction could fail if a user doesn't add slippage.

The **Deadline** setting is an amount of time to revert from swapping assets. This is beneficial when a block is full. For instance, if Neo has 1M transactions per second and a user fills up the mempool, and a user stays in that pool for five days, the user could lose money through convert if the transaction is still valid. Adding a deadline makes sure that in such circumstances the signed transaction is invalid after the designated amount of time.
FTWSwap's default deadline setting is 10 min.

### PROVIDE LIQUIDITY (Add and Remove)

With the **Add Liquidity** asset action, users can provide liquidity to any number of liquidity pools by providing equal liquidity on both sides of a trading pair. A liquidity pool is composed of a pair of NEP-17 tokens. Consequently, liquidity providers receive LP tokens corresponding to their deposited assets. Holding LP tokens gives liquidity providers the ability to earn passive income via trading fees, proportional to their contributions to the pool. 100% of the trading fees from adding liquidity will be distributed to liquidity providers, which means the amount of the underlying token that can be redeemed by each LP token increases. LP tokens will be burned when liquidity providers withdraw their liquidity, and they can get back their deposited NEP-17 token pairs.
Upon choosing a token and quantity to trade, users will be matched with the price and quantity of the target token (decided by the liquidity pool status). Instead of using a traditional buy/sell order book, both sides of the trade are pre-funded by on-chain liquidity pools. The current trading fee is set at 0.25%. When a user wants to trade A to C without sufficient liquidity in the pool, or the relevant pool has not yet been established, the trading router will automatically search for an optimal trading route to execute the trade.
Users can remove liquidity at any time to swap LP tokens back to the corresponding assets.

#### Create Pools

#### Time Lock
The **Time Lock** setting is the date a provider is willing to lock their liquidity tokens until the date. Liquidity locking is a notion that was created to protect investors from falling for this scam.

#### LP Tokens

FTWSwap uses NEP-11 (NFT) for LP tokens.

### STAKE & UNSTAKE

Once users have **added liquidity**, they can **stake** their LP tokens to earn rewards in NEP. Each liquidity pool earns an annul percentage yield (APY) which is calculated by the total value of liquidity locked vs the value of how many LEP tokens are minted per year for the pool. For example, if there is $100,000 USD total in a pool, and that pool gets 1,000 NEP tokens per day, and each NEP token = $0.10 USD, then 1,000 * 365 = 365,000 * $0.10 = $36,500 USD. $36,500 / $100,000 * 100 = 36.5% APY.
Each liquidity pool is allocated a percentage of the total NEP minted in a year.

Users can **unstake** their LP tokens at any time. Once their tokens are unstaked, users will still own LP tokens but the tokens will no longer be staked into liquidity pools. Users can remove liquidity at any time to swap LP tokens back to the corresponding assets.

