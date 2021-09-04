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
  db.query('SELECT * FROM cows', function (err, data, fields) {
    if (err) throw err;

    res.statusCode = 200;
    res.send({results: data});
  })
});

app.post('/cows', (req, res) => {
  console.log(req.body);

  var queryString = `INSERT INTO cows (name, description) VALUES (?, ?)`;
  db.query(queryString, [req.body.cow.name, req.body.cow.description], (err) => {
     if (err) throw (err);

    //  res.setHeader('content-type', 'application/json');
    //  res.status(201);
    //  res.end("created");

     res.sendStatus(201);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
