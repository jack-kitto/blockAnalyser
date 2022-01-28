const { env } = require('process');
const server = require('./src/server');

server.start()



// //   const createUser = await prisma.user.create({ data: user })
//     // const readline = require('readline');
//     // const rl = readline.createInterface({
//     //     input: process.stdin,
//     //     output: process.stdout
//     // });



//     // rl.question('Please enter start block: ', function (start) {
//     //     startBlock = start
//     //     rl.question('Please enter end block: ', function (end) {
//     //         endBlock = end
//     //         print(start, end).then(r1.close())
//     //         // rl.close();
//     //     });
//     // });

//     // rl.on('close', function () {
//     //         // console.log("\nStart block: ", startBlock, "\nend block: ", endBlock)
//     //         process.exit(0);
//     // });

//     // async function print(start, end){
//     //     for(var i = start; i <= end; i++){
//     //         web3.eth.getBlock(i).then(res => console.log(res)).catch(err => console.log(err))
//     //     }
//     // }

// //   let includePosts: boolean = false
// //   let user: Prisma.UserCreateInput

// //   // Check if posts should be included in the query
// //   if (includePosts) {
// //     user = {
// //       email: 'elsa@prisma.io',
// //       name: 'Elsa Prisma',
// //       posts: {
// //         create: {
// //           title: 'Include this post!',
// //         },
// //       },
// //     }
// //   } else {
// //     user = {
// //       email: 'elsa@prisma.io',
// //       name: 'Elsa Prisma',
// //     }
// //   }

// //   // Pass 'user' object into query
// //   const createUser = await prisma.user.create({ data: user })
// }

// main()
//   .catch((e) => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   }) 