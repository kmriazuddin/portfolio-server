/*
  Warnings:

  - The `images` column on the `blog` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `images` column on the `project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "blog" DROP COLUMN "images",
ADD COLUMN     "images" TEXT[];

-- AlterTable
ALTER TABLE "project" DROP COLUMN "images",
ADD COLUMN     "images" TEXT[];
