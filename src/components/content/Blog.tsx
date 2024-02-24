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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handlePostClick = (post: any) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
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
        <div key={post.id} style={styles.postContainer}>
          <h2 style={styles.title} onClick={() => handlePostClick(post)}>
            {post.title}
          </h2>
          <p>投稿者: {post.author}</p>
          <p>投稿日: {post.date}</p>
        </div>
      ))}
      {selectedPost && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.closeButton} onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p>
            <p>投稿者: {selectedPost.author}</p>
            <p>投稿日: {selectedPost.date}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
    postContainer: {
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer'
    },
    title: {
      color: '#333',
      marginBottom: 8,
      textDecoration: 'underline'
    },
    modal: {
      position: 'fixed' as 'fixed',
      zIndex: 1,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 8,
      maxWidth: 600,
      maxHeight: '80%',
      overflow: 'auto'
    },
    closeButton: {
      color: '#aaa',
      float: 'right' as 'right',
      fontSize: 28,
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  };  

export default Blog;
