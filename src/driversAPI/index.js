const app = require('express')();
const drivers = require('./drivers.json');

app.get('/drivers', (req, res) => res.send(drivers));

app.listen(3002, () => console.log('Drivers API start na porta 3002'));