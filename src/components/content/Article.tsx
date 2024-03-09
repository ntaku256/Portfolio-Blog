import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import CodeBlock from '../markdown/CodeBlock';
import MdImage from '../markdown/MdImage';
import '../markdown/Markdown.css';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown-light.css';

const Article = () => {
  const { postId } = useParams<{ postId: string }>();
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const basePath = process.env.PUBLIC_URL || "";

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(`${basePath}/articles/${postId}/README.md`);
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
    <div className="article">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} 
        className='markdown-body'
        children={markdownContent}
        components={{
          code: CodeBlock,  
          img: MdImage,
      }}/>
    </div>
  );
};

export default Article;
