# dooboo.io

> Project is built mainly with `nextjs`, `react server component` and `supabase`.

[![CI](https://github.com/hyochan/dooboo.io/actions/workflows/ci.yml/badge.svg)](https://github.com/hyochan/dooboo.io/actions/workflows/ci.yml)

<img width="415" alt="landing" src="https://user-images.githubusercontent.com/27461460/189487529-f2942a04-63af-4d6d-9600-d84e50cabeb9.png">

## Configuration

### 1. Environment variables

<details>
<summary>ROOT_URL</summary>

Base url of your web app.
</details>

<details>
<summary>JWT_SECRET</summary>

Used in server-side when you want to encode & decode data when communicating with client.
</details>

<details>
<summary>DATABASE_URL</summary>

Database connection url to access database in [Supabase](https://supabase.io).
</details>

<details>
<summary>SUPABASE_URL</summary>

Supabase database url.
</details>

<details>
<summary>SUPABASE_API_KEY</summary>

Supabase api key.
</details>

<details>
<summary>GITHUB_CLIENT_ID</summary>

The github client id to access github api.
</details>

<details>
<summary>GITHUB_CLIENT_SECRET</summary>

The github client secret to access github api.
</details>

<details>
<summary>GH_TOKEN</summary>

The github token to use github authentication.
</details>

<details>
<summary>STORAGE_KEY</summary>
Azure storage key.

You can read about [managing storage account access keys](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&bc=%2Fazure%2Fstorage%2Fblobs%2Fbreadcrumb%2Ftoc.json&tabs=azure-portal) for more details.
</details>

<details>
<summary>STORAGE_ACCOUNT</summary>
Azure storage account.

You can read about [managing storage account access keys](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&bc=%2Fazure%2Fstorage%2Fblobs%2Fbreadcrumb%2Ftoc.json&tabs=azure-portal) for more details.
</details>

<details>
<summary>STORAGE_ENDPOINT</summary>
Azure storage end point. This is a base url to access your file via url.
</details>

> We strongly recommend to organize multiple environment files for prisma migration or testing.

```
cp `.env.sample` `.env.dev` // For Prisma migration
cp `.env.sample` `.env.test` // For testing
cp `.env.sample` `.env.local` // For developing
```

## Installation

### 1. Prepare Supabase account

1. Create [Supabase](https://supabase.com) project

### 2. Prepare Azure storage account

1. Create [Azure](https://azure.microsoft.com) project

1. Create [Azure Storage Account](https://learn.microsoft.com/azure/storage/common/storage-account-overview)

1. Create container with `blob storage`

   <img width="360" alt="Screenshot 2023-02-19 at 2 10 11 PM" src="https://user-images.githubusercontent.com/27461460/219923456-894f3b53-a8bc-4485-b30d-f94183a9a652.png">

1. Set alias in your bash and set supabase project reference id

   ```
   alias SUPABASE_PROJECT_DOOBOOIO = 
   ```

   Now, you can generate supabase types with our script.

   ```
   generate:supabase
   ```

### 3. Prepare Database

Run `yarn migrate:dev` to you local database then when every is done right, you can then run `yarn migrate:prod` to update production database in Supabase.

### 2. Copy environment variables

```
cp .env.sample .env.local
```

Check the environment variables stated in [Environment variables](#1-environment-variables) and replace to your own.

### Tips

> When using yarn berry and TS fails after upgrading packages, try to follow below steps.

1. `yarn set version berry`
1. `yarn`
1. `yarn dlx @yarnpkg/sdks vscode`
1. `yarn plugin import typescript`
1. `yarn dlx @yarnpkg/sdks vscode`
   - Useful when prettier extension is not working.
