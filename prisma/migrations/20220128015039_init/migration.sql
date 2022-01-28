/*
  Warnings:

  - Added the required column `mixHash` to the `Block` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiptsRoot` to the `Block` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Block" ADD COLUMN     "mixHash" TEXT NOT NULL,
ADD COLUMN     "receiptsRoot" TEXT NOT NULL,
ALTER COLUMN "baseFeePerGas" DROP NOT NULL;
