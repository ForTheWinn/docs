---
sidebar_position: 3
---

# FTWSwap

FTWSwap is a Decentralized Finance (DeFi) platform where users can swap, provide liquidity, and earn swap fees. The platform facilitates automated transactions between cryptocurrency tokens on the Neo N3 blockchain through the use of smart contracts.

## ASSET ACTIONS

The FTWSwap DeFi platform is compiled of several asset actions users can take: **Swap**, **Create a Pool**, **Add Liquidity**, **Remove Liquidity**, **Stake LP tokens**, and **Unstake**. Users can perform any of these actions in [FTWSwap page](https://www.forthewin.network/#/swap).

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

In order for the pool to begin facilitating trades, someone must create and seed it with an initial deposit of each token. This first liquidity provider is the one who sets the initial price of the pool. They are incentivized to deposit an equal value of both tokens into the pool. To see why, consider the case where the first liquidity provider deposits tokens at a ratio different from the current market rate. This immediately creates a profitable arbitrage opportunity, which is likely to be taken by an external party. in order for the pool to begin facilitating trades, someone must seed it with an initial deposit of each token. This first liquidity provider is the one who sets the initial price of the pool. They are incentivized to deposit an equal value of both tokens into the pool. To see why, consider the case where the first liquidity provider deposits tokens at a ratio different from the current market rate. This immediately creates a profitable arbitrage opportunity, which is likely to be taken by an external party.

#### Time Lock

The **Time Lock** setting is the date a provider is willing to lock their liquidity tokens until the date. Liquidity locking is a notion that was created to protect investors from falling for this scam.

## LP TOKENS

LP tokens represent a liquidity provider's share of a pool, and the liquidity provider remains entirely in control of the token. For example, if you contribute $10 USD worth of assets to a pool that has a total worth of $100, you would receive 10% of that pool's LP tokens. FTWSwap uses NEP-11 standard for LP tokens.

### Yield Farming with LP Tokens

LP tokens can have extra rewards by staking in [FTWFarm page](https://www.forthewin.network/#/farm).

## SWAP FEES

Providing liquidity gives you a reward in the form of trading fees when people use your liquidity pool. Whenever someone trades on FTWSwap, the trader pays a 0.25% fee, of which 0.17% is added to the Liquidity Pool of the swap pair they traded on.

## IMPERMANENT LOSS

Providing liquidity is not without risk, as you may be exposed to impermanent loss.
