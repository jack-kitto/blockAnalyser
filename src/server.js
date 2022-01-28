const express = require('express');
const routes = require('./routes')

const app = express();
const port = 12345;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

function start(){
    routes.setup(app);

    app.listen(port, () => {
        console.log('Listining on port ${port}');
    })
}

module.exports = { start };