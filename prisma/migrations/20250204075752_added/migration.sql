/*
  Warnings:

  - Added the required column `converted_code` to the `History` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "History" ADD COLUMN     "converted_code" TEXT NOT NULL;
