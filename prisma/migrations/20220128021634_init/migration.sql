/*
  Warnings:

  - The primary key for the `Block` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `Block` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Block" DROP CONSTRAINT "Block_pkey",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Block_pkey" PRIMARY KEY ("id");
