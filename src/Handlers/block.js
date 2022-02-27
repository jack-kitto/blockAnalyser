const Web3 = require('web3');
const web3 = new Web3("https://mainnet.infura.io/v3/78f30f1fb097453faabae08e3fa064a0");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

function createRange(req, res){
    // console.log(req.body.ping);
    res.json(req.body);

    for(var i = req.body.start; i <= req.body.end; i++){
        web3.eth.getBlock(i).then(res_ => {
            prisma.block.create({data: res_}).then(resp => loadTransactions(resp.transactions)).catch(errr => console.log(errr))
        }).catch(err => console.log(err))
    }

}

function fetchRange(req, res){
    console.log(req.body)
    getBlocks(req.body.start, req.body.end).then(res_ => res.json(res_)).catch(err => res.json(err))
    console.log("Fetching range");
}

async function getBlocks(start, end){
    var blocks = [];
    for(var i = start; i <= end; i++){
            blocks.push(await web3.eth.getBlock(i))
    }
    return blocks;
}

function loadTransactions(transactions){

    for(var i = 0; i <= transactions.length -1; i++){
        // console.log(transactions[i])
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
            loadAccounts(txn.from);
            loadAccounts(txn.to);
            prisma.transaction.create({data: txn}).then().catch(errr => console.log(errr))
        }).catch(err => console.log(err))

        // console.log("###########################################################")
        // console.log("NEW TRANSACTION")
        // console.log("###########################################################")
    }
    console.log("###########################################################")
    console.log("NEW BLOCK")
    console.log("###########################################################")
}

async function loadAccounts(address_){
    // console.log("###########################################################")
    // console.log("NEW ADDRESS")
    // console.log("###########################################################")

    var index = 9;
    // console.log("Address: ", address_);
    var store; 

    let account = {
        address: address_,
        balance: await web3.eth.getBalance(address_),
        code: await web3.eth.getCode(address_),
        transactionCount: await web3.eth.getTransactionCount(address_)
    }

    loadStorage(address_).then().catch(err => console.log(err));
        // prisma.account.create({data: account}).then(resp => console.log(resp)).catch(errr => console.log(errr))

    // web3.eth.getStorageAt(address_, 0).then(res => {
    //     if(res != zero){
    //         console.log("Storage at 0: " + res);
    //         while(store != zero){
    //             var i = 0;
    //             web3.eth.getStorageAt(address_, i).then(res_ => { 
    //                 store = res;
    //                 console.log("Storage at " + i + ": ", store);
    //                 i++;
    //             }).catch(errr => console.log(err));
    //             ;
    //         }
    //     }

    // }).catch(err => console.log(err));
}

async function loadStorage(account){
    var storage = [];
    var zero = "0x0000000000000000000000000000000000000000000000000000000000000000";
    var store = 0;

    index = 0
    while(store != zero){
        store = await web3.eth.getStorageAt(account, index)
        if(store != zero){
            storage[i] = store;
            console.log("Account: " + account + "Storage: " + store);
        }
        index++;
    }
    return storage;
}

function func(req, res){
    web3.eth.getStorageAt("0x6761BcAF2b2156C058634D9772F07374D6eDeF1d", 0).then(res => { 
        console.log("Storage: " + res);
    }).catch(errr => console.log(err));
    res.send("done");


}
function deleteAll(req, res){
    prisma.block.deleteMany({}).then(res_ => res.send(res_)).catch(err => console.log(err))
}

module.exports = { func, createRange, deleteAll, fetchRange };