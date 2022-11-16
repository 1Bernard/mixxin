// https://eth-goerli.g.alchemy.com/v2/K2CZGu05r6HgS4zR1XZRNDey8cvrcKiT

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: import.meta.env.ALCHEMY_URL,
      accounts: [import.meta.WALLET_PRIVATE_KEY]
    }
  }

}