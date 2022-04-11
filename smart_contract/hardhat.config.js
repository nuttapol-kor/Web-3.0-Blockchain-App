require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9YZ70aI3xu5d57caE9_qoFMXCOgrc3xk',
      accounts: ['c1e447776f3c7053c70b0029a0119c221060b9fb110512f84f0e07d1a1e6519c'],
    },
  },
};