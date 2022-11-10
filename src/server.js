const express = require('express');
const path = require('path');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 27017);
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(express.urlencoded({extended: false}));

//Global Variablesimage

//Routes
app.get('/', (req, res)=>{
    res.send('Hello world');
})

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;