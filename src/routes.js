const welcome = require('./Handlers/welcome');
const block = require('./Handlers/block');
const transaction = require('./Handlers/transaction');
const test = require('./Handlers/block');

function setup(app){
    app.get('/', welcome.helloWorld);
    app.post('/block/range/create', block.createRange);
    app.post('/block/range/fetch', block.fetchRange);
    app.get('/block/delete/all', block.deleteAll);
    app.get('/transaction/delete/all', transaction.deleteAll);
    app.get('/test', test.func);
}

module.exports = { setup };