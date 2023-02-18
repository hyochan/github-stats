-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "AuthType" AS ENUM ('email', 'github', 'apple');

-- CreateTable
CREATE TABLE "NewsLetter" (
    "email" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "NewsLetter_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "User" (
    "id" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255),
    "name" VARCHAR(255),
    "description" TEXT,
    "birthday" TIMESTAMP(3),
    "gender" "Gender",
    "phone" VARCHAR(255),
    "locale" VARCHAR(8),
    "certified" BOOLEAN DEFAULT false,
    "githubLogin" VARCHAR(255),
    "location" VARCHAR(255),
    "company" VARCHAR(255),
    "blog" VARCHAR(255),
    "twitter" VARCHAR(255),
    "githubURL" VARCHAR(255),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" VARCHAR(50) NOT NULL,
    "thumbUrl" VARCHAR(1000),
    "thumbUrlHigh" VARCHAR(1000),
    "imageUrl" VARCHAR(1000),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "userId" VARCHAR(50),

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPlugin" (
    "id" VARCHAR(50) NOT NULL,
    "login" VARCHAR(255) NOT NULL,
    "githubId" VARCHAR(255) NOT NULL,
    "score" SMALLINT NOT NULL DEFAULT 0,
    "userName" VARCHAR(255),
    "avatarUrl" VARCHAR(1000),
    "description" TEXT,
    "json" JSON,
    "certifiedAt" TIMESTAMP(3),
    "certificationNo" INTEGER,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "userId" VARCHAR(50),
    "pluginId" VARCHAR(50),
    "viewCount" INTEGER DEFAULT 0,

    CONSTRAINT "UserPlugin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plugin" (
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "apiURL" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "json" JSON,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Plugin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trophy" (
    "id" VARCHAR(50) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "score" DECIMAL(7,2) NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "userPluginId" VARCHAR(50),

    CONSTRAINT "Trophy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stats" (
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "iconURL" VARCHAR(255),
    "iconURLSelected" VARCHAR(255),
    "score" DECIMAL(7,2) NOT NULL,
    "description" TEXT,
    "statsElements" JSON,
    "userPluginId" VARCHAR(50),

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_githubLogin_key" ON "User"("githubLogin");

-- CreateIndex
CREATE UNIQUE INDEX "Image_userId_key" ON "Image"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPlugin_login_pluginId_key" ON "UserPlugin"("login", "pluginId");

-- CreateIndex
CREATE UNIQUE INDEX "Plugin_name_key" ON "Plugin"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Trophy_type_userPluginId_key" ON "Trophy"("type", "userPluginId");

-- CreateIndex
CREATE INDEX "Stats_userPluginId_idx" ON "Stats"("userPluginId");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPlugin" ADD CONSTRAINT "UserPlugin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPlugin" ADD CONSTRAINT "UserPlugin_pluginId_fkey" FOREIGN KEY ("pluginId") REFERENCES "Plugin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trophy" ADD CONSTRAINT "Trophy_userPluginId_fkey" FOREIGN KEY ("userPluginId") REFERENCES "UserPlugin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_userPluginId_fkey" FOREIGN KEY ("userPluginId") REFERENCES "UserPlugin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
