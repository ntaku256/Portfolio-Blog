# Markdownで<**img**>タグを使いたい
### したかったこと
- 各画像の大きさをしてできるようにしたくて、`<img>`タグを使う必要がある
- `<br>`で改行できるようにしたい

### 参考記事
- **Next.js製ブログでunifiedを使ってMarkdownを変換する**<br>
https://zenn.dev/sorinaji/articles/unified_markdown_react

- **Markdownのサイト内リンクをNext.jsのLinkにしたい**<br>
https://zenn.dev/thiragi/articles/ce13a4be4110c0

- **JavaScriptでreplaceメソッドを使って指定した文字列を削除する方法を現役エンジニアが解説【初心者向け】**<br>
https://magazine.techacademy.jp/magazine/29974

# したこと
- プラグインでHTMLを使えるようにする
- ただこれだけだと、画像のサイズを指定できないので、`MdImage.tsx`を修正する
- また、imgタグのパスの問題で、markdownを直接見た時画像が表示されないので、修正する(実行環境のパスにしているため)

### 使用したプラグイン
- `remark-gfm`
    - GithubのReadme形式でMarkodownを書けるプラグイン 
    - 前回(**ブログ作成その4**)で既に使用している 
    - **mdast**に対してプラグインの処理を行う
<br>

- `remark-breaks`
    - 改行をbrにするプラグイン
    - **mdast**に対してプラグインの処理を行う
<br>

- `rehype-raw`
    - **Markdown**の中で**HTML**を使えるようにするプラグイン
    - **hast**に対してプラグインの処理を行う
<br>

- `remark-parse`
    - **markdown**を**mdast**(Markdownの抽象構文木)に変換するプラグイン
<br>

- `remark-rehype`
    - **mdast**を**hast**(HTMLの抽象構文木)に変換するプラグイン
<br>

- `rehype-stringify`
    - **hast**を**HTML**に変換するプラグイン
<br>

- `rehype-react`
    - **HTML**から**React**へ変換するプラグイン

### 注意点
- **rehype-raw**は**hast**に対してプラグインの処理を行うので、`remarkPlugins`で書くときに気を付ける必要がある
- あとは変換の順番を気にしながらコーディングする

```tsx:Article.tsx
import remarkParse from 'remark-parse';
import remarkBreaks from 'remark-breaks';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw'; 
import rehypeStringify from 'rehype-stringify';
import rehypeReact from 'rehype-react';


<ReactMarkdown
    remarkPlugins={[
        remarkParse, //markdown -> mdast
        remarkGfm,
        remarkBreaks,
        remarkRehype, //mdast -> hast
        rehypeRaw,
        rehypeStringify, //hast -> HTML
        rehypeReact, //HTML -> React
    ]} 
    className='markdown-body'
    children={markdownContent}
    components={{
        code: CodeBlock,  
        img: MdImage,
    }}
/>
```
```tsx:MdImage.tsx
import { FC } from "react";

type MdImageType = {
  src?: string;
  alt?: string;
  title?: string;
  width?: string | number;
};

const MdImage: FC<MdImageType> = (props) => {
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
};

export default MdImage;
```