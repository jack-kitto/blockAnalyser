/*
  Warnings:

  - You are about to drop the column `accessList` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "accessList",
ALTER COLUMN "maxFeePerGas" SET DATA TYPE TEXT,
ALTER COLUMN "maxPriorityFeePerGas" SET DATA TYPE TEXT;
