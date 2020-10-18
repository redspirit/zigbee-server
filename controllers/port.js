const express = require('express');
const router = express.Router();

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0');

const parser = new Readline();
port.pipe(parser);

parser.on('data', line => console.log(`> ${line}`));

router.post('/', (req, res) => {

    let text = req.body.text;

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