/*
  Warnings:

  - You are about to drop the column `pluginName` on the `UserPlugin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[login,pluginId]` on the table `UserPlugin` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserPlugin" DROP CONSTRAINT "UserPlugin_pluginName_fkey";

-- DropIndex
DROP INDEX "UserPlugin_login_pluginName_key";

-- AlterTable
ALTER TABLE "UserPlugin" DROP COLUMN "pluginName",
ADD COLUMN     "pluginId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "UserPlugin_login_pluginId_key" ON "UserPlugin"("login", "pluginId");

-- AddForeignKey
ALTER TABLE "UserPlugin" ADD CONSTRAINT "UserPlugin_pluginId_fkey" FOREIGN KEY ("pluginId") REFERENCES "Plugin"("name") ON DELETE SET NULL ON UPDATE CASCADE;
