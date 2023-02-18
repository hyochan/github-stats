import {H1, H4} from '~/components/Typography';

import {Inter} from '@next/font/google';
import Link from 'next/link';
import type {Locale} from '~/i18n';
import LocaleSwitcher from '~/components/LocaleSwitcher';
import type {Post} from '@prisma/client';
import type {ReactElement} from 'react';
import clsx from 'clsx';
import {getTranslates} from '~/utils/getTranslation';
import {prismaClient} from '~/prisma';

const inter = Inter({subsets: ['latin']});

async function getPosts(): Promise<Post[]> {
  const data = await prismaClient.post.findMany();

  return data ?? [];
}

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const [{index}, data] = await Promise.all([getTranslates(lang), getPosts()]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <H1 className={clsx('text-h1', 'mb-8', inter.className)}>
        {index.title}
      </H1>

      <div>
        <LocaleSwitcher />
      </div>
      <div>
        <H4 className={clsx('text-h2', 'mb-4', inter.className)}>
          {index.postList}
        </H4>
        <div className="flex flex-col">
          {data.length !== 0 ? (
            data.map((elm) => (
              <Link
                href={`${lang}/posts/${elm.id}`}
                key={elm.id}
                className="mb-4 hover:underline cursor-pointer"
              >
                {elm.title}
              </Link>
            ))
          ) : (
            <p>Try to seed mock data with yarn seed</p>
          )}
        </div>
      </div>
    </div>
  );
}
