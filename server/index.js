const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());

app.get('/cows', (req, res) => {
  var queryString = `SELECT * FROM cows;`;
  db.query(queryString, (err, data, fields) => {
    if(err) {
      throw err;
    }
    res.statusCode = 200;
    res.send(data);
  });
})

app.post('/cows', (req, res) => {
  var queryString = `INSERT INTO cows (name, description) VALUES (?, ?)`;
  console.log(newCow);
  db.query(queryString, [req.body.name, req.body.description], (err) => {
     if (err) throw (err);
     res.sendStatus(201);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
