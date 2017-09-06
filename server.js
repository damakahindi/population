const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initializing the express app
const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 7000;

mongoose.connect('mongodb://dama:dama@ds123534.mlab.com:23534/population', {
  useMongoClient: true,
});

app.listen(port, () => {
  console.info('==> 🌎 Listening on port %s. Open up http://127.0.0.1:%s/ ', port, port);
  console.info('==> 🌎 API port %s. Open up http://127.0.0.1:%s/api ', port, port);
});

module.exports = app;
