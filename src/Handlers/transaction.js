const Web3 = require('web3');
const web3 = new Web3("https://mainnet.infura.io/v3/78f30f1fb097453faabae08e3fa064a0");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

function deleteAll(req, res){
    prisma.transaction.deleteMany({}).then(res_ => res.send(res_)).catch(err => console.log(err))
}

module.exports = { deleteAll };