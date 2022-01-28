/*
  Warnings:

  - You are about to drop the column `chainId` on the `Block` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_blockHash_fkey";

-- AlterTable
ALTER TABLE "Block" DROP COLUMN "chainId",
ADD COLUMN     "transactions" TEXT[];
