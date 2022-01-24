const express = require('express');
const dotenv = require('dotenv'); // this allows global variables
const colors = require('colors'); //this shows colors in our console.
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => res.send('Hello'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgMagenta))
