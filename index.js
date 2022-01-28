const { PrismaClient } = require('@prisma/client');
const { env } = require('process');

var Web3 = require('web3');

var web3 = new Web3("https://mainnet.infura.io/v3/b0e7735dd085494f9eb0002130929191");

const prisma = new PrismaClient()

async function main() {
    console.log("Hello, world!")
    let startBlock = 14061480
    let endBlock = 14091480  
        for(var i = startBlock; i <= endBlock; i++){
            web3.eth.getBlock(i).then(res => {
                prisma.block.create({data: res}).then(resp => console.log(resp.number)).catch(errr => console.log(errr))
            }).catch(err => console.log(err))
        }

//   const createUser = await prisma.user.create({ data: user })
    // const readline = require('readline');
    // const rl = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // });



    // rl.question('Please enter start block: ', function (start) {
    //     startBlock = start
    //     rl.question('Please enter end block: ', function (end) {
    //         endBlock = end
    //         print(start, end).then(r1.close())
    //         // rl.close();
    //     });
    // });

    // rl.on('close', function () {
    //         // console.log("\nStart block: ", startBlock, "\nend block: ", endBlock)
    //         process.exit(0);
    // });

    // async function print(start, end){
    //     for(var i = start; i <= end; i++){
    //         web3.eth.getBlock(i).then(res => console.log(res)).catch(err => console.log(err))
    //     }
    // }

//   let includePosts: boolean = false
//   let user: Prisma.UserCreateInput

//   // Check if posts should be included in the query
//   if (includePosts) {
//     user = {
//       email: 'elsa@prisma.io',
//       name: 'Elsa Prisma',
//       posts: {
//         create: {
//           title: 'Include this post!',
//         },
//       },
//     }
//   } else {
//     user = {
//       email: 'elsa@prisma.io',
//       name: 'Elsa Prisma',
//     }
//   }

//   // Pass 'user' object into query
//   const createUser = await prisma.user.create({ data: user })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 