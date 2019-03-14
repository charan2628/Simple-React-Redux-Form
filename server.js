const express = require('express');
const path = require('path');
const zipCodes = require('./util/zipCode');

const app = express();
app.use(express.static('dist'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname + '/dist/index.html'))
    );

app.get('/zipCode/:zipCode', (req, res) => {
    let places = zipCodes[req.params['zipCode']];
    if(!places) {
        places = []
    }
    res.json({
        places
    });
})

app.post('/checkout/data', (req, res) => {
    console.log('recieved');
    console.log(req.body);
    res.sendStatus(200);
})

app.listen(8080, () => console.log('Express app started'));