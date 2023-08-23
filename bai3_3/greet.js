const express = require('express');
module.exports = function(options = {}) {
    const router = express.Router();
    router.get('/greet', (req, res, next) => {
        res.end(options.greeting);
    });
    return router;
};