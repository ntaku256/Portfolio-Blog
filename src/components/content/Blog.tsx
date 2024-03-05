import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const basePath = process.env.PUBLIC_URL || "";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${basePath}/articles/title.json`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
      console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[]);
  
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
      <div style={styles.postGrid}>
        {filteredPosts.map(post => (
            <Link to={`/Article/${post.id}`} key={post.id} style={styles.postContainer}>
            <div style={styles.postContent}>
                <h2 style={styles.title}>{post.title}</h2>
                <p style={styles.content}>{post.content}</p>
                <p>投稿者: {post.author}</p>
                <p>投稿日: {post.date}</p>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
    postGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      padding: 16,
    },
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
      cursor: 'pointer',
    },
    title: {
      color: '#333',
      marginBottom: 8,
      textDecoration: 'underline'
    },
    content:{
      height: '100px',
    }
  };

export default Blog;
