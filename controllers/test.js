const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {

    res.send({
        success: true,
        message: 'test method'
    });

});


module.exports = router;