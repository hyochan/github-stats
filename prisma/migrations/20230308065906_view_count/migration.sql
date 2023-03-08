/*
  Warnings:

  - You are about to drop the column `viewCount` on the `user_plugins` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_plugins" DROP COLUMN "viewCount",
ADD COLUMN     "view_count" INTEGER DEFAULT 0;
