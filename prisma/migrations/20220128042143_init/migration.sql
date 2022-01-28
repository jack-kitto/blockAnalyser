/*
  Warnings:

  - Added the required column `maxFeePerGas` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxPriorityFeePerGas` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `r` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `s` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `v` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "accessList" TEXT[],
ADD COLUMN     "maxFeePerGas" INTEGER NOT NULL,
ADD COLUMN     "maxPriorityFeePerGas" INTEGER NOT NULL,
ADD COLUMN     "r" TEXT NOT NULL,
ADD COLUMN     "s" TEXT NOT NULL,
ADD COLUMN     "v" TEXT NOT NULL,
ALTER COLUMN "chainId" SET DATA TYPE TEXT;
