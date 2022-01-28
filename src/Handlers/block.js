const Web3 = require('web3');
const web3 = new Web3("https://mainnet.infura.io/v3/b0e7735dd085494f9eb0002130929191");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

function createRange(req, res){
    console.log(req.body.ping);
    res.json(req.body);

    for(var i = req.body.start; i <= req.body.end; i++){
        web3.eth.getBlock(i).then(res_ => {
            prisma.block.create({data: res_}).then(resp => loadTransactions(resp.transactions)).catch(errr => console.log(errr))
        }).catch(err => console.log(err))
    }

}

function loadTransactions(transactions){

    for(var i = 0; i <= transactions.length -1; i++){
        console.log(transactions[i])
        web3.eth.getTransaction(transactions[i]).then(res => {
            let txn = {
                hash: res.hash,
                nonce: res.nonce,
                blockHash: res.blockHash,
                blockNumber: res.blockNumber,
                transactionIndex: res.transactionIndex,
                from: res.from,
                to: res.to,
                value: res.value,
                gasPrice: res.gasPrice,
                gas: res.gas,
                input: res.input,
                maxFeePerGas: res.maxFeePerGas,
                maxPriorityFeePerGas: res.maxPriorityFeePerGas,
                r: res.r,
                s: res.s,
                v: res.v,
                chainId: res.chainId
            }
            prisma.transaction.create({data: txn}).then(resp => console.log(resp)).catch(errr => console.log(errr))
        }).catch(err => console.log(err))

        // console.log("###########################################################")
        // console.log("NEW TRANSACTION")
        // console.log("###########################################################")
    }
    console.log("###########################################################")
    console.log("NEW BLOCK")
    console.log("###########################################################")
}

function deleteAll(req, res){
    prisma.block.deleteMany({}).then(res_ => res.send(res_)).catch(err => console.log(err))
}

module.exports = { createRange, deleteAll };