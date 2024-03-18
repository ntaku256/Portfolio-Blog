import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown-light.css';
import remarkBreaks from 'remark-breaks';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw'; 
import rehypeStringify from 'rehype-stringify';
import rehypeReact from 'rehype-react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import '../../App.css'

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
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="article">
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkBreaks,
          remarkParse,
          remarkRehype,
          rehypeRaw,
          rehypeStringify,
          rehypeReact,
        ]} 
        className='markdown-body'
        children={markdownContent}
        components={{
          code(props) {
            const { children, className, node, ...rest} = props 
            const match = /language-(\w+)/.exec(className || '');
            const matchname = /language-(\w+)(:.+)/.exec(className || '');
            const lang = match && match[1] ? match[1] : "";
            const name = matchname && matchname[2] ? matchname[2].slice(1) : '';
            console.log(lang)
            if (lang) {
              return (
                <div>
                  <div>{name}</div>
                  <SyntaxHighlighter
                    customStyle={{ 
                      background: undefined,
                      fontSize: "16px",
                    }}
                    style={okaidia}
                    showLineNumbers={true}
                    language={lang}
                    children={String(children).replace(/\n$/, "")}
                  />
                </div>
              );
            } else {
              return (
                <code {...rest} className={"precode"}>
                  {children}
                </code>
              );
            }
          },
          img(props){
            const { src, alt, title, width } = { ...props };
            const basePath = process.env.PUBLIC_URL || "";
            let modifiedSrc;
            if (src && src.startsWith("../..")) {
              modifiedSrc = src.replace("../..", "");;  
            } 
            else {
              // もしsrcがundefinedの場合や"../.."から始まらない場合は、元のsrcをそのまま使用する
              modifiedSrc = src;
            }

            return <img src={basePath+modifiedSrc} alt={alt} title={title} width={width}/>;
          }
        }}
      />
    </div>
  );
};

export default Article;
