import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// サンプルの記事データ
const samplePosts = [
  {
    id: 'README',
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
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <h1>ブログ</h1>
    <input
        type="text"
        placeholder="記事を検索"
        value={searchTerm}
        onChange={handleSearch}
    />
    {filteredPosts.map(post => (
        <Link to={`/Article/${post.id}`} key={post.id} style={styles.postContainer}>
        <div style={styles.postContent}>
            <h2 style={styles.title}>{post.title}</h2>
            <p>投稿者: {post.author}</p>
            <p>投稿日: {post.date}</p>
        </div>
        </Link>
    ))}
    </div>
  );
};

const styles = {
    postContainer: {
      textDecoration: 'none',
      color: 'inherit',
      marginBottom: 16,
      display: 'block'
    },
    postContent: {
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 16,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer'
    },
    title: {
      color: '#333',
      marginBottom: 8,
      textDecoration: 'underline'
    }
  };

export default Blog;
