-- DropIndex
DROP INDEX "Transaction_from_key";

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "maxFeePerGas" DROP NOT NULL,
ALTER COLUMN "maxPriorityFeePerGas" DROP NOT NULL;
