const cryptoData = require("./cryptoAPI");
const nftData = require("./nftAPI");
const validations = require("./validations");
const tweetData = require("./twitterAPI");
const exchangeData = require("./exchangeApi");
const database = require("./firebaseData");

module.exports = {
  cryptoData: cryptoData,
  nftData: nftData,
  tweetData: tweetData,
  validations: validations,
  exchangeData: exchangeData,
  database: database,
};
