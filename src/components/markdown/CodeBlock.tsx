import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  inline?: boolean; // Define the type of the 'inline' prop
  className?: string;
  children?: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps>  = ({ inline, className, children }) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }
  const match = /language-(\w+)/.exec(className || "");
  const lang = match && match[1] ? match[1] : "";
  return (
    <SyntaxHighlighter
      customStyle={{ background: undefined }}
      style={okaidia}
      language={lang}
      children={String(children).replace(/\n$/, "")}
    />
  );
};

export default CodeBlock;
