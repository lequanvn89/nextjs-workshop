import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { PostList, PostListItem } from '@stn-ui/blog';

import { getAllPosts } from '@/lib/api';

const Blog: NextPage = async () => {
  const posts = await getAllPosts();
  return (
    <PostList>
      {posts.map(({ slug, title, date, tag, author, description, image }) => (
        <PostListItem
          key={slug}
          title={title}
          tag={tag ?? 'Default'}
          author={author}
          description={description}
          image={<Image src={image} alt={title} fill />}
          date={date}
          route={`/blog/${slug}`}
        />
      ))}
    </PostList>
  );
};

export default Blog;
