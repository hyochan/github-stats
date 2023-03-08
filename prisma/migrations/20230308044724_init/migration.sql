-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "AuthType" AS ENUM ('email', 'github', 'apple');

-- CreateTable
CREATE TABLE "news_letters" (
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

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
    "github_login" TEXT,
    "location" TEXT,
    "company" TEXT,
    "blog" TEXT,
    "twitter" TEXT,
    "github_url" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "thumb_url" TEXT,
    "thumb_url_high" TEXT,
    "image_url" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "user_id" UUID,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_plugins" (
    "login" TEXT NOT NULL,
    "github_id" TEXT NOT NULL,
    "score" SMALLINT NOT NULL DEFAULT 0,
    "user_name" TEXT,
    "avatar_url" TEXT,
    "description" TEXT,
    "json" JSON,
    "certified_at" TIMESTAMP(3),
    "certification_no" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "user_id" UUID,
    "plugin_id" TEXT,
    "viewCount" INTEGER DEFAULT 0,

    CONSTRAINT "user_plugins_pkey" PRIMARY KEY ("login")
);

-- CreateTable
CREATE TABLE "plugins" (
    "id" TEXT NOT NULL,
    "api_url" TEXT NOT NULL,
    "description" TEXT,
    "json" JSON,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "plugins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trophies" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" TEXT NOT NULL,
    "score" DECIMAL(7,2) NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "user_plugin_login" TEXT,

    CONSTRAINT "trophies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stats" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "icon_url" TEXT,
    "icon_url_selected" TEXT,
    "score" DECIMAL(7,2) NOT NULL,
    "description" TEXT,
    "stat_element" JSON,
    "user_plugin_login" TEXT,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_github_login_key" ON "users"("github_login");

-- CreateIndex
CREATE UNIQUE INDEX "images_user_id_key" ON "images"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_plugins_user_id_key" ON "user_plugins"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_plugins_login_plugin_id_key" ON "user_plugins"("login", "plugin_id");

-- CreateIndex
CREATE UNIQUE INDEX "trophies_type_user_plugin_login_key" ON "trophies"("type", "user_plugin_login");

-- CreateIndex
CREATE INDEX "stats_user_plugin_login_idx" ON "stats"("user_plugin_login");

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_plugins" ADD CONSTRAINT "user_plugins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_plugins" ADD CONSTRAINT "user_plugins_plugin_id_fkey" FOREIGN KEY ("plugin_id") REFERENCES "plugins"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trophies" ADD CONSTRAINT "trophies_user_plugin_login_fkey" FOREIGN KEY ("user_plugin_login") REFERENCES "user_plugins"("login") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_user_plugin_login_fkey" FOREIGN KEY ("user_plugin_login") REFERENCES "user_plugins"("login") ON DELETE SET NULL ON UPDATE CASCADE;
