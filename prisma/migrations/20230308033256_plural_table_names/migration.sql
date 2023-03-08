/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NewsLetter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Plugin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trophy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPlugin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_userId_fkey";

-- DropForeignKey
ALTER TABLE "Stats" DROP CONSTRAINT "Stats_userPluginLogin_fkey";

-- DropForeignKey
ALTER TABLE "Trophy" DROP CONSTRAINT "Trophy_userPluginLogin_fkey";

-- DropForeignKey
ALTER TABLE "UserPlugin" DROP CONSTRAINT "UserPlugin_pluginId_fkey";

-- DropForeignKey
ALTER TABLE "UserPlugin" DROP CONSTRAINT "UserPlugin_userId_fkey";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "NewsLetter";

-- DropTable
DROP TABLE "Plugin";

-- DropTable
DROP TABLE "Stats";

-- DropTable
DROP TABLE "Trophy";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserPlugin";

-- CreateTable
CREATE TABLE "news_letters" (
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "news_letters_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT,
    "name" TEXT,
    "description" TEXT,
    "birthday" TIMESTAMP(3),
    "gender" "Gender",
    "phone" TEXT,
    "locale" TEXT,
    "certified" BOOLEAN DEFAULT false,
    "githubLogin" TEXT,
    "location" TEXT,
    "company" TEXT,
    "blog" TEXT,
    "twitter" TEXT,
    "githubURL" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "thumbUrl" TEXT,
    "thumbUrlHigh" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "userId" UUID,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_plugins" (
    "login" TEXT NOT NULL,
    "githubId" TEXT NOT NULL,
    "score" SMALLINT NOT NULL DEFAULT 0,
    "userName" TEXT,
    "avatarUrl" TEXT,
    "description" TEXT,
    "json" JSON,
    "certifiedAt" TIMESTAMP(3),
    "certificationNo" INTEGER,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "userId" UUID,
    "pluginId" UUID,
    "viewCount" INTEGER DEFAULT 0,

    CONSTRAINT "user_plugins_pkey" PRIMARY KEY ("login")
);

-- CreateTable
CREATE TABLE "plugins" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "apiURL" TEXT NOT NULL,
    "description" TEXT,
    "json" JSON,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "plugins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trophies" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" TEXT NOT NULL,
    "score" DECIMAL(7,2) NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "userPluginLogin" TEXT,

    CONSTRAINT "trophies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stats" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "iconURL" TEXT,
    "iconURLSelected" TEXT,
    "score" DECIMAL(7,2) NOT NULL,
    "description" TEXT,
    "statsElements" JSON,
    "userPluginLogin" TEXT,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_githubLogin_key" ON "users"("githubLogin");

-- CreateIndex
CREATE UNIQUE INDEX "images_userId_key" ON "images"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_plugins_userId_key" ON "user_plugins"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_plugins_login_pluginId_key" ON "user_plugins"("login", "pluginId");

-- CreateIndex
CREATE UNIQUE INDEX "trophies_type_userPluginLogin_key" ON "trophies"("type", "userPluginLogin");

-- CreateIndex
CREATE INDEX "stats_userPluginLogin_idx" ON "stats"("userPluginLogin");

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_plugins" ADD CONSTRAINT "user_plugins_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_plugins" ADD CONSTRAINT "user_plugins_pluginId_fkey" FOREIGN KEY ("pluginId") REFERENCES "plugins"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trophies" ADD CONSTRAINT "trophies_userPluginLogin_fkey" FOREIGN KEY ("userPluginLogin") REFERENCES "user_plugins"("login") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_userPluginLogin_fkey" FOREIGN KEY ("userPluginLogin") REFERENCES "user_plugins"("login") ON DELETE SET NULL ON UPDATE CASCADE;
