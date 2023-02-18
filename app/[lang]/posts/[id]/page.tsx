import Link from 'next/link';
import type {Locale} from '~/i18n';
import type {Post} from '@prisma/client';
import type {ReactElement} from 'react';
import {getTranslates} from '~/utils/getTranslation';
import {prismaClient} from '~/prisma';

async function getPost(id: string): Promise<Post | null> {
  return await prismaClient.post.findUnique({where: {id}});
}

type Props = {
  params: {lang: Locale; id: string};
};

export default async function PostPage({
  params: {id, lang},
}: Props): Promise<ReactElement> {
  const [{post, common}, data] = await Promise.all([
    getTranslates(lang),
    getPost(id),
  ]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-h1 mb-4">
          {post.title}: {data?.title}
        </h1>
        <p>
          {post.content}: {data?.content}
        </p>
      </div>
      <Link
        href={`/${lang}`}
        className="mt-8 border-[1px] border-solid p-2 rounded"
      >
        {common.goBack}
      </Link>
    </div>
  );
}
