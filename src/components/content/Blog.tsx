import React, { useState } from 'react';

// サンプルの記事データ
const samplePosts = [
  {
    id: 1,
    title: 'Reactでブログを作ろう',
    content: 'Reactを使ってシンプルなブログを作る方法を紹介します。',
    author: 'John Doe',
    date: '2024-02-24'
  },
  {
    id: 2,
    title: 'React Hooksの使い方',
    content: 'useStateやuseEffectなどのReact Hooksの基本的な使い方について解説します。',
    author: 'Jane Smith',
    date: '2024-02-23'
  }
];

const Blog = () => {
  const [posts, setPosts] = useState(samplePosts);

  return (
    <div>
      <h1>ブログ</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>投稿者: {post.author}</p>
          <p>投稿日: {post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
