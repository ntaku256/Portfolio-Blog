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
  });
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
    <div className='blog-title'>
      <input
          className='article-search'
          type="text"
          placeholder="記事を検索"
          value={searchTerm}
          onChange={handleSearch}
      />
      <div className='article-postGrid'>
        {filteredPosts.map(post => (
            <Link to={`/Article/${post.id}`} key={post.id} className='article-postContainer'>
            <div className='article-postContent'>
                <h2 className='article-title'>{post.title}</h2>
                <hr />
                <p className='article-content'>{post.content}</p>
                <p>更新日: {post.date}</p>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
