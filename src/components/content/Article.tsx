import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import 'github-markdown-css';

const Article = () => {
  const { postId } = useParams<{ postId: string }>();
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(`/Portfolio-Blog/articles/README.md`);
        if (!response.ok || response.status !== 200) {
          throw new Error('ファイルが見つかりませんでした。');
        }
        else {
          const markdownText = await response.text();
          setMarkdownContent(markdownText);
          setLoading(false);
        }
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMarkdownContent();
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>記事詳細</h1>
      <div className="article">
        <ReactMarkdown className="markdown-body">{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Article;
