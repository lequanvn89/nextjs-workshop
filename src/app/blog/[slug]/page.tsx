import React from 'react';
import { Metadata, NextPage } from 'next';
import Image from 'next/image';
import { PostArticle } from '@stn-ui/blog';

import { getAllPosts, getPostById } from '@/lib/api';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Record<'slug', string>[]> {
  const posts = await getAllPosts();

  return posts.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostById(params.slug);

  return {
    title: post.title,
    description: post.description,
  };
}

const BlogArticle: NextPage<Props> = async ({ params }) => {
  const post = await getPostById(params.slug);

  return <PostArticle content={post.html} image={<Image src={post.image} alt={post.title} fill />} />;
};

export default BlogArticle;
