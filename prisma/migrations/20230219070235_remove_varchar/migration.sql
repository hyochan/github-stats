/*
  Warnings:

  - The primary key for the `NewsLetter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Plugin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserPlugin` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Stats" DROP CONSTRAINT "Stats_userPluginLogin_fkey";

-- DropForeignKey
ALTER TABLE "Trophy" DROP CONSTRAINT "Trophy_userPluginLogin_fkey";

-- DropForeignKey
ALTER TABLE "UserPlugin" DROP CONSTRAINT "UserPlugin_pluginName_fkey";

-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "thumbUrl" SET DATA TYPE TEXT,
ALTER COLUMN "thumbUrlHigh" SET DATA TYPE TEXT,
ALTER COLUMN "imageUrl" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "NewsLetter" DROP CONSTRAINT "NewsLetter_pkey",
ALTER COLUMN "email" SET DATA TYPE TEXT,
ADD CONSTRAINT "NewsLetter_pkey" PRIMARY KEY ("email");

-- AlterTable
ALTER TABLE "Plugin" DROP CONSTRAINT "Plugin_pkey",
ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "apiURL" SET DATA TYPE TEXT,
ADD CONSTRAINT "Plugin_pkey" PRIMARY KEY ("name");

-- AlterTable
ALTER TABLE "Stats" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "iconURL" SET DATA TYPE TEXT,
ALTER COLUMN "iconURLSelected" SET DATA TYPE TEXT,
ALTER COLUMN "userPluginLogin" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Trophy" ALTER COLUMN "type" SET DATA TYPE TEXT,
ALTER COLUMN "userPluginLogin" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "phone" SET DATA TYPE TEXT,
ALTER COLUMN "locale" SET DATA TYPE TEXT,
ALTER COLUMN "githubLogin" SET DATA TYPE TEXT,
ALTER COLUMN "location" SET DATA TYPE TEXT,
ALTER COLUMN "company" SET DATA TYPE TEXT,
ALTER COLUMN "blog" SET DATA TYPE TEXT,
ALTER COLUMN "twitter" SET DATA TYPE TEXT,
ALTER COLUMN "githubURL" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "UserPlugin" DROP CONSTRAINT "UserPlugin_pkey",
ALTER COLUMN "login" SET DATA TYPE TEXT,
ALTER COLUMN "githubId" SET DATA TYPE TEXT,
ALTER COLUMN "userName" SET DATA TYPE TEXT,
ALTER COLUMN "avatarUrl" SET DATA TYPE TEXT,
ALTER COLUMN "pluginName" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserPlugin_pkey" PRIMARY KEY ("login");

-- AddForeignKey
ALTER TABLE "UserPlugin" ADD CONSTRAINT "UserPlugin_pluginName_fkey" FOREIGN KEY ("pluginName") REFERENCES "Plugin"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trophy" ADD CONSTRAINT "Trophy_userPluginLogin_fkey" FOREIGN KEY ("userPluginLogin") REFERENCES "UserPlugin"("login") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_userPluginLogin_fkey" FOREIGN KEY ("userPluginLogin") REFERENCES "UserPlugin"("login") ON DELETE SET NULL ON UPDATE CASCADE;
