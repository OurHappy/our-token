# OUR Token

OUR Token

## Install

```
nvm use v14.17.5

npm install
```

## Compile

```
npx truffle compile
```

## Migrate

```
npx truffle migrate
```

## Play with migrated contract

```
npx truffle console
```

## Test

```
npx truffle test
```

## Coverage

```
npx truffle run coverage
```

<img width="500" alt="Coverage" src="https://user-images.githubusercontent.com/646843/146915094-9fb12004-e524-445c-a303-e80ab75b785e.png">

## Verify on Etherscan

https://forum.openzeppelin.com/t/verify-smart-contract-inheriting-from-openzeppelin-contracts/4119

```
npx truffle run verify OUR@${contract_address} --network ropsten
```
