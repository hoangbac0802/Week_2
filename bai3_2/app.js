// app.js
const express = require('express');
const app = express();

// Middleware function example
function myFunction(req, res, next) {
    console.log('Middleware: myFunction');
    next();
}

// External module
const other = require('./other');

// Routes
app.get('/myPath', myFunction, function (req, res, next) {
    res.send('GET request received at /myPath');
});

app.post('/myPath', function (req, res, next) {
    res.send('POST request received at /myPath');
});

app.put('/myPath', function (req, res, next) {
    res.send('PUT request received at /myPath');
});

app.delete('/myPath', function (req, res, next) {
    res.send('DELETE request received at /myPath');
});

app.all('/otherPath', function (req, res, next) {
    console.log('Handling all methods for /otherPath');
    next();
});

app.route('/chainedPath')
    .get(function (req, res, next) {
        res.send('GET request received at /chainedPath');
    })
    .post(function (req, res, next) {
        res.send('POST request received at /chainedPath');
    })
    .put(function (req, res, next) {
        res.send('PUT request received at /chainedPath');
    });

app.get('/externalPath', myFunction, other.doSomething);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
