var axios = require('axios');
var moment = require('moment');

const bangkokForecast = async () => {
  // put your code here !!
  return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=Bangkok,TH&cnt=7&units=metric&appid=e5446373eef6128679c7fa8a1951d788")
    .then(response => {
      return response.data.list.map(element => createElement(element));
    }).catch(err => {
      return err.response.data
    })
};

function createElement(element) {
  return {
    date: moment.unix(element.dt).format("YYYY-MM-DD"),
    minTemp: element.temp.min,
    maxTemp: element.temp.max
  };
}

module.exports = {
  bangkokForecast
};