/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");


module.exports = {
  networks: {
    hardhat: {
    },
    tea: {
      url: "https://tea-sepolia.g.alchemy.com/public",
      chainId: 10218,
      accounts:['#']
    }
  },
  solidity: "0.8.3",
};
