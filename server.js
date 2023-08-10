const express = require('express');
const app = express();
const dotenv = require('dotenv')
const connect = require('./database');

app.use(express.json());

const PORT = process.env.PORT || 5500;

connect();
app.listen(PORT, ()=>{
    console.log('Server is running on port 5000');
})