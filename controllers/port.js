const express = require('express');
const router = express.Router();

const portpath = '/dev/ttyACM0';
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort(portpath);

const parser = new Readline();
port.pipe(parser);

console.log('Listen port', portpath);
parser.on('data', line => console.log(`> ${line}`));

router.post('/', (req, res) => {

    let text = req.body.text;
    
    console.log('Input', text);

    port.write(text, function(err) {
        if (err) {
            res.send('Error on write: ' + JSON.stringify(err.message));
            return console.log('Error on write: ', err.message)
        }
        console.log('message written');
        res.send('message written');
    });

});


module.exports = router;
