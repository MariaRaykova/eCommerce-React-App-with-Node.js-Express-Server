const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
    app.use(cors({
        exposedHeaders: 'Authorization' //явно трябва да му кажем 
    }));
    
    app.use(express.json());

    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser(secret));
};