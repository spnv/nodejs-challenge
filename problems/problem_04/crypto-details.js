var axios = require('axios');

const cryptoDetails = async (symbols = []) => {
  // put your code here !!
  return Promise.all(symbols.map((element) =>
    axios.get("https://coinbin.org/" + element)
    .then(response => {
      return response.data.coin
    }).catch(err => {
      return err.response.data
    })))
};

module.exports = {
  cryptoDetails
};