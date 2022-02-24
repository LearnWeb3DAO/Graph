# The Graph

We will learn how to

## Prequisites

- We will be using yarn which is a package manager just like npm because graph has some issues with NPM
- **Please install yarn from [here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) If your computer doesnt have yarn already installed**

## Build

- We will be using the folder named `RandomWinnerGame` that you created in the `Chainlink VRF` tutorial
  - So your final folder structure should look like this:
  ```bash
  RandomWinnerGame
      - hardhat-tutorial
  ```
- Create an abi.json file inside your
- To create your subgraph you will need to go to [The Graph's Hosted Service](https://thegraph.com/hosted-service/)
- Login using your github and visit `My Dashboard` tab

![](https://i.imgur.com/pFtBOc9.png)

- Click on `Add Subgraph` and fill in the information and create the subgraph

![](https://i.imgur.com/4gfdUUf.png)

- When your subgraph is created, it will show you some commands in `Install`, `Init` and `Deploy`

![](https://i.imgur.com/xS4Fdme.png)

- In your terminal execute this command pointing to `RandomWinnerGame` folder:

```bash
yarn global add @graphprotocol/graph-cli
```

- Then execute this command but replace your github username with`GITHUB_USERNAME`

```bash
graph init --product hosted-service GITHUB_USERNAME/Learnweb3
```

- After that execute this command but replace your github username with`GITHUB_USERNAME` and `YOUR_RANDOM_WINNER_GAME_CONTRACT_ADDRESS` with the address of the RandomWinnerGame contract that you deployed in your Chainlink VRF tutorial. Press enter for all the questions after that

```bash
graph init --contract-name RandomWinnerGame --product hosted-service GITHUB_USERNAME/Learnweb3  --from-contract YOUR_RANDOM_WINNER_GAME_CONTRACT_ADDRESS  --abi ./abi.json --network mumbai graph
```

![](https://i.imgur.com/Y5NTkGD.png)

- The next command will be, selected the hosted-service option and for the deploy key, go to [The Graph's Hosted Service](https://thegraph.com/hosted-service/) and click on `My Dashboard` and copy the `Access Token` and paste it for the `Deploy Key`

```bash
    graph auth
```

![](https://i.imgur.com/CkFmiv1.png)

- Now the last two commands to execuet are

```bash
cd graph
yarn deploy
```

Now you can go back to [The Graph's Hosted Service](https://thegraph.com/hosted-service/) and click on `My Dashboard` you will be able to see your graph

![](https://i.imgur.com/OOEbDgB.png)

Boom you have deployed your first graph!!!

Now comes the fun part, where we will modify the default code provided to us by The Graph into the code which can help us track events for our contract

Lets get started

- Open up you `subgraph.yaml` and add the a `startBlock` to the yaml file after the `abi: RamdomWinnerGame` line, to get the startBlock you will need to go to [Mumbai PolygonScan](https://mumbai.polygonscan.com/) and search up your contract address, after that you will need to copy the block number of the block in which your contract was deployed

- The start block doesnt come with the default settings but because we know that we only need to track the events from the block the contract was deployed, it will be beneficial for us because we will not need to sync the entire blockchain but only the part after the contract was deployed for tracking the events

![](https://i.imgur.com/HVQ24Un.png)

```bash=
    source:
      address: "0x889Ef69261272Caa27f0655D0208bAc7055EDAD5"
      abi: RandomWinnerGame
      startBlock: BLOCK_NUMBER
```

Your final file should look something like this:
