const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//
// https://www.abeautifulsite.net/determining-your-apps-base-directory-in-nodejs
global.__basedir = __dirname;
//
const config = require('./knexfile');
const knex = require('knex')(config);
const sql = knex('data').toString();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/users', require('./routes/users') );

// Start Server

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);
