# ブログ作成その4
# 更新日
- 2024/03/06

# Markdown形式で記事を表示しよう
# 失敗
- CodeComponentのimportが上手くいかず、たくさんの記事を見たが解決方法が分からなかった。
- のでCodeComponentを使わない方法を模索した。
```tsx
import { CodeComponent } from "react-markdown/lib/ast-to-react";
```
### 参考記事
**React で markdown を表示する方法(コードハイライト、ファイル名表示、画像サイズ変更まで)**

https://naoto-kagaya.com/articles/2023-01-24-react-markdown

# 成功
- 参考記事を参考にすることでmarkdown形式で表示できた。
- ただinline, className, childrenの定義をせず、エラーが出たので少し修正している
- markdownファイルのパス指定は
```tsx
fetch(`${basePath}/articles/${postId}.md`)
posId : mdファイルの名前
```
### 参考記事
**react-markdownのメモ**

https://zenn.dev/techexplorer/scraps/4b780b47216f7d

- CodeBlock.tsx
```tsx
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
      customStyle={{ 
        background: undefined,
      }}
      style={okaidia}
      showLineNumbers={true}
      language={lang}
      children={String(children).replace(/\n$/, "")}
    />
  );
};

export default CodeBlock;

```
- Article.tsx
```tsx
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} 
          className='markdown-body'
          children={markdownContent}
          components={{
            code: CodeBlock,  
            img: MdImage,
        }}/>
```
### 注意点
- 動作はするが、次のようなエラーが出てしまった。解決方法が分からず動作しているので現状放置している
```shell
Type 'FC<CodeBlockProps>' is not assignable to type 'keyof IntrinsicElements | Component<ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps> | undefined'.
Type 'FunctionComponent<CodeBlockProps>' is not assignable to type 'FunctionComponent<ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps>'.
    Type 'ReactNode' is not assignable to type 'string | Element | null | undefined'.
      Type 'number' is not assignable to type 'string | Element | null | undefined'.
```
# imageの表示
- 画像の表示は失敗した参考記事のものを使用している
- パスの指定は
```
/images/{image_name}
```