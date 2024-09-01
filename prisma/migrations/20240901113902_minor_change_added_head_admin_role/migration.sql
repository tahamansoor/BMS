/*
  Warnings:

  - You are about to drop the column `Role` on the `User` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "Roles" ADD VALUE 'HEAD_ADMIN';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "Role",
ADD COLUMN     "role" "Roles" NOT NULL DEFAULT 'USER';
