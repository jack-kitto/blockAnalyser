/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Block" (
    "number" INTEGER NOT NULL,
    "hash" TEXT NOT NULL,
    "parentHash" TEXT NOT NULL,
    "baseFeePerGas" INTEGER NOT NULL,
    "nonce" TEXT,
    "sha3Uncles" TEXT NOT NULL,
    "logsBloom" TEXT NOT NULL,
    "transactionsRoot" TEXT NOT NULL,
    "stateRoot" TEXT NOT NULL,
    "miner" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "totalDifficulty" TEXT NOT NULL,
    "extraData" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "gasLimit" INTEGER NOT NULL,
    "gasUsed" INTEGER NOT NULL,
    "timestamp" INTEGER NOT NULL,
    "uncles" TEXT[],
    "chainId" INTEGER NOT NULL,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "hash" TEXT NOT NULL,
    "nonce" INTEGER NOT NULL,
    "blockHash" TEXT NOT NULL,
    "blockNumber" INTEGER,
    "transactionIndex" INTEGER,
    "from" TEXT NOT NULL,
    "to" TEXT,
    "value" TEXT NOT NULL,
    "gasPrice" TEXT NOT NULL,
    "gas" INTEGER NOT NULL,
    "input" TEXT NOT NULL,
    "chainId" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("hash")
);

-- CreateTable
CREATE TABLE "Account" (
    "address" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "contractCode" TEXT NOT NULL,
    "storage" TEXT NOT NULL,
    "transactionCount" INTEGER NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("address")
);

-- CreateTable
CREATE TABLE "Network" (
    "chainId" INTEGER NOT NULL,
    "ensAddress" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "blockNumber" INTEGER NOT NULL,
    "gasPrice" INTEGER NOT NULL,
    "feeData" INTEGER NOT NULL,

    CONSTRAINT "Network_pkey" PRIMARY KEY ("chainId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Block_hash_key" ON "Block"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "Block_parentHash_key" ON "Block"("parentHash");

-- CreateIndex
CREATE UNIQUE INDEX "Block_miner_key" ON "Block"("miner");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_blockHash_key" ON "Transaction"("blockHash");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_from_key" ON "Transaction"("from");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_blockHash_fkey" FOREIGN KEY ("blockHash") REFERENCES "Block"("hash") ON DELETE RESTRICT ON UPDATE CASCADE;
