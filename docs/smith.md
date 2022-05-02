---
sidebar_position: 2
---

# FTWSmith

**Deploy** your **NEP-17** smart contract and **NEP-11** smart contract on N3 in a few clicks.

> NEP-17 is token standard for the Neo blockchain like Shiba Inu tokens on Ethereum.
> NEP-11 is NFT(Non-fungible token) standard like CryptoPunk.


### How to deploy?

First, visit [Smith page](https://www.forthewin.network/#/smith).

Second, choose a contract type between NEP-17 and NEP-11.

Third, fill the form with token name, symbol, decimals, total supply, author, and description.

Last, submit the form and wait for 30 secs until blockchain accepts your request. You will receive your tokens to your wallet.

![Example banner](/img/smith/1.png)

### Browse transactions

You can find your token info at the FTWSmith page. Check your token contract hash. You will use the token hash to browse at block explorers.

**NEO's block explorers**
- [One Gate](https://explorer.onegate.space/homepage)
- [Dora](https://dora.coz.io/)
- [NeoTube](https://n3.neotube.io/home)

![Example banner](/img/smith/2.png)

### Fee

Deploying a new smart contract on NEO costs **10 GAS + system fee (~0.1GAS)**. It is NEO's fee not Smith's.

### Original contracts

Your smart contract uses NEP-17 and NEP-11 standard by NEO foundation. It has update function, so you can modify contract when you need to scale your smart contract. Your wallet that used for the deployment has granted the ownership.

[Source codes on Github](https://github.com/ForTheWinn/FTW-N3-Contracts/tree/main/contracts/FTWSmithNep17)

### Dos and Don'ts

**Do**
1. Try to mint on Testnet first in order to test and to get the same hash for both Testnet and Mainnet

**Don't**
1. You cannot mint with existing token name.
2. Don't use unicode or emoji.
