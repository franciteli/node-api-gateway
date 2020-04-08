const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;
const {
    DRIVERS_API_URL,
    VEHICLES_API_URL,
} = require('./url');

const driversProxy = httpProxy(DRIVERS_API_URL);
const vehiclesProxy = httpProxy(VEHICLES_API_URL);

app.get('/', (req, res) => res.send('Node Gateway API'));

app.get('/drivers', (req, res, next) => driversProxy(req, res, next));
app.get('/vehicles', (req, res, next) => vehiclesProxy(req, res, next));

app.listen(port, () => console.log('Api Gateway ouvindo na porta 3000'));