const path = require('path')
const express = require('express');
const dotenv = require('dotenv'); // this allows global variables
const colors = require('colors'); //this shows colors in our console.
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions')

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development'){
   app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions)

if(process.env.NODE_ENV === 'production') {
   app.use(express.static('client/build'));

   app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgMagenta))
