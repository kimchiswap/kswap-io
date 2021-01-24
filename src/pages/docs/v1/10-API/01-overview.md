---
title: API Overview
tags: api, documentation
---

This section explains the KSWAP Subgraph and how to interact with it. The KSWAP subgraph indexes data from the KSWAP contracts over time. It organizes data about pairs, tokens, KSWAP as a whole, and more. The subgraph updates any time a transaction is made on KSWAP. The subgraph runs on [The Graph](https://thegraph.com/) protocol's hosted service and can be openly queried.

## Resources

[Subgraph Explorer](https://thegraph.com/explorer/subgraph/kimchiswap/kswap-subgraph) - sandbox for querying data and endpoints for developers.

[KSWAP  Subgraph](https://github.com/Kimchiswap/kswap-subgraph) - source code for deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state of KSWAP and also tracks historical data. It is currently used to power [info.kimchiswap.io](https://info.kimchiswap.io/). **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).**

## Making Queries

To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/introduction).

## Versions

The [kswap Subgraph](https://thegraph.com/explorer/subgraph/kimchiswap/kswap-subgraph) only tracks data on KSWAP. For KSWAP information see the [Subgraph](https://thegraph.com/explorer/subgraph/graphprotocol/kswap).
