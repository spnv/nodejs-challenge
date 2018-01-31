const {
  readFileSync
} = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => {
  // put your code here !!
  return new Promise(async (resolve, reject) => {

    let transactions = await raw.toString().split('\n').map(line => lineToObject(line))

    let users = [...new Set(transactions.map(transaction => transactions.user))];
    
    let reformedByUser = await transactions.reduce((acc, cur) => {
      if (acc[cur.user] == undefined)
        acc[cur.user] = []
      else
        acc[cur.user].push(cur)
      return acc
    }, [])

    resolve(reformedByUser)

  });
};

function lineToObject(line) {

  let dataField = line.split(',');
  let timestamp = dataField[0];
  let user = dataField[1].split('=')[1];
  let data = parseInt(dataField[2].split('=')[1])

  return {
    timestamp: dataField[0],
    user: user,
    data: data
  }
}

function summary(data) {

}

module.exports = {
  dataUsage
};