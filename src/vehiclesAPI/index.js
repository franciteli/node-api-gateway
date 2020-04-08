const app = require('express')();
const vehicles = require('./vehicles.json');

app.get('/vehicles', (req, res) => res.send(vehicles));

app.listen(3001, () => console.log('Vehicles API start na porta 3001'));