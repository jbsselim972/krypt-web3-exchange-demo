require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/L9B90sYGRSbkWrBF0Hlxh_B2qSwI2mQc",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
