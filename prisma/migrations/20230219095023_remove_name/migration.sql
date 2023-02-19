/*
  Warnings:

  - The primary key for the `Plugin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Plugin` table. All the data in the column will be lost.
  - Added the required column `id` to the `Plugin` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserPlugin" DROP CONSTRAINT "UserPlugin_pluginId_fkey";

-- AlterTable
ALTER TABLE "Plugin" DROP CONSTRAINT "Plugin_pkey",
DROP COLUMN "name",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Plugin_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "UserPlugin" ADD CONSTRAINT "UserPlugin_pluginId_fkey" FOREIGN KEY ("pluginId") REFERENCES "Plugin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
