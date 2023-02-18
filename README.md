### Next with prisma boilerplate

### ⚠️ This project is built on next v13 experimental-version.

- under app dir, page components are [RSC](https://ko.reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html) by default.
- If you want to integrate relay and nextjs RSC, check [#1](https://github.com/prisma-korea/prisma-nextjs-graphql/pull/1) and [#3](https://github.com/prisma-korea/prisma-nextjs-graphql/pull/3)

## Specifications

- [next v13](https://beta.nextjs.org/docs)
- [typescript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)
- [prisma](https://www.prisma.io/)

---

## Getting Started

1. generate env file

   ```sh
   cp .env.sample .env.local
   ```

2. Setup database url for prisma

- Default database is `sqlite`. You can change this in `/prisma/schema.prisma`. Check supported database [here](https://www.prisma.io/docs/reference/database-reference/supported-databases)

3. Modify schema codes in `/prisma/schema.prisma` file as your needs.

4. Execute `yarn migrate:dev` to apply prisma schema to your database. If there is no error, a migration file will be created as a result.

5. Execute `yarn generate:prisma` to generate prisma client.

   5-1. You can seed test data with `yarn seed` script. It'll execute the code in `/prisma/seed.ts`.

6. Now, let's start the project!

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
```

---

## Project guide

### Providers

Since all page components under app dir are [RSC](https://ko.reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html), you can not use context api in component. If you want to use providers, add that provider in `app/[lang]/Providers.tsx`. The states and hooks from the provider will be used only in client components.

### style

This project uses tailwindcss which has great fit with RSC. Check `tailwind.config.js` to set up a custom config code. you can define your colors, fontsize etc...

In `styles/root.css`, there are some pre-defined classes. To organize class usages, grouping corresponded classes into same class(ex. text-dark and dark:text-white).

The `styles/output.css` file is a result. A tailwindcss will create only css classes which is used in project. This file is imported in `app/[lang]/layout.tsx` which is entry point of route.

### Localization

nextjs has supported localization as a default like below. But not in experiment stage. So this project is just follow the [example](https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing).

```ts
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
      defaultLocale: 'en',
      locales: ['en', 'fr'],
  },
};
```

Translation files are in `/src/utils/translates/*.json`. Add more texts in `*.json` file, then use it with `getTranslation` function.

To add more locale, create `*.json` file in `/src/utils/translates/`. Then add locale in the `getTranslation` file.

```ts
const translates = {
  en: () => import('./translates/en.json').then((module) => module.default),
  ko: () => import('./translates/ko.json').then((module) => module.default),
  /* add more locales here */
};
```

⚠️ `getTranslation` function will only executed on RSC. If you want to use translation text in client component, then pass that texts with props.

```ts
export default async function Page({lang}) {
  const {index} = await getTranslates(lang);

  return (
    <div>
      <p>{index.title}</p>
      <ClientComponent t={index.content}>
    </div>
  );
}
```

### API Routes

Next 13 beta still places api routes in `pages/api` folder. And this project has sample graphql server end point. You can test that route with `http://localhost:3000/api/graphql`. Make sure that execute `yarn generate` script before test.

server codes are in `/server` folder.
