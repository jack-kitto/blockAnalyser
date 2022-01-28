const welcome = require('./Handlers/welcome');
const block = require('./Handlers/block');
const transaction = require('./Handlers/transaction');

function setup(app){
    app.get('/', welcome.helloWorld);
    app.post('/block/range/create', block.createRange);
    app.get('/block/delete/all', block.deleteAll);
    app.get('/transaction/delete/all', transaction.deleteAll);
}

module.exports = { setup };