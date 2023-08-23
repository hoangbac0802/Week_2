// other.js (external module)
exports.doSomething = function(req, res, next) {
    console.log('Doing something in other module');
    next();
};
