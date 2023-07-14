/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");


module.exports = {
  networks: {
    hardhat: {
    },
    base: {
      url: "hhttps://developer-access-mainnet.base.org",
      chainId: 8453,
      accounts:[``]
    }
  },
  solidity: "0.8.3",
};
