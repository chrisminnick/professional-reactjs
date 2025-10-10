const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const react = require('react');

let app = express();
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(express.static(path.join(__dirname, 'www')));

app.get('/'), function (req, res) {};
app.post('/checkout/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  //mimic a slow network connection
  setTimeout(function () {
    res.send(
      JSON.stringify({
        cart: req.body,
        approval: 'yes',
      })
    );
  }, 1000);

  //debugging output for the terminal
  console.log('you posted: Cart: ' + JSON.stringify(req.body));
});

//wait for a connection
app.listen(8080, function () {
  console.log('Server is running on port 8080.');
});
