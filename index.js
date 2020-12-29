const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

const app = express();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
