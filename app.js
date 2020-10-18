require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss' });

require('./modules/exceptions');
const express = require('express');
const bodyParser = require('body-parser');
const socket = require('./modules/socket');

const app = express();

app.use(bodyParser.json({
    type: 'application/json'
}));

app.use('/test', require('./controllers/test'));
app.use('/port', require('./controllers/port'));

app.use(function(req, res, next) {
    res.sendStatus(404);
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
        success: false,
        message: 'bad request',
        code: 6
    });
});

app.listen(8077, function () {
    console.log('Server started on', 8077);
});
