const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const db = require('./database');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());

app.get('/cows', (req, res) => {
  var queryString = `SELECT * FROM cows;`;
  console.log(queryString);
  db.query(queryString, (err, result) => {
    if(err) {
      throw err;
    }
    res.send(result);
  });
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
