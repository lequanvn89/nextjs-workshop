import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import { ArticleLayout } from '@stn-ui/layout';
import { getPostById } from '@/lib/api';

type Props = {
  params: {
    slug: string;
  };
  children: React.ReactNode;
};

const Layout: NextPage<Props> = async ({ params, children }) => {
  const post = await getPostById(params.slug);

  return (
    <ArticleLayout
      title={post.title}
      subtitle={post.description}
      author={post.author}
      date={post.date}
      tag={post.tag ?? 'Default'}
      linkAs={Link}
      linkHref="/blog"
    >
      {children}
    </ArticleLayout>
  );
};

export default Layout;
