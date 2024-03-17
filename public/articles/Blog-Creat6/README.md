# 現状起こっているエラーをなくそう

#  babel-preset-react-app
### エラー症状
```shell
One of your dependencies, babel-preset-react-app, is importing the "@babel/plugin-proposal-private-property-in-object" package without declaring it in its dependencies. This is currently working because "@babel/plugin-proposal-private-property-in-object" is already in your node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which is not maintianed anymore. It is thus unlikely that this bug will ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to your devDependencies to work around this error. This will make this message go away.
```
### 修正
- `babel-preset-react-app`は開発ビルド時のみ使用するので`package.json`のdependencyではなく、devDependencyにインストールする
```shell
npm install @babel/plugin-proposal-private-property-in-object --save-dev
```
### 参考URL
**新しい React アプリを作成すると、「babel-preset-react-app」が重要であるというメッセージが表示されました**<br>
https://stackoverflow.com/questions/76719218/created-new-react-app-and-message-appeared-says-babel-preset-react-app-is-impo

# ソース マップの解析に失敗しました
### エラー症状
- ソース マップの生成が失敗
```shell
WARNING in ./node_modules/hast-util-raw/node_modules/parse5/dist/common/doctype.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\TN256\Documents\portfolio\portfolio\node_modules\hast-util-raw\node_modules\parse5\dist\common\doctype.js.map' file: Error: ENOENT: no such file or directory, open 'C:\Users\TN256\Documents\portfolio\portfolio\node_modules\hast-util-raw\node_modules\parse5\dist\common\doctype.js.map'
```
### 修正
- `env`ファイルを追加する
**.env**
```tsx
GENERATE_SOURCEMAP=false
```
### 参考URL
**ReactのXエラーからソースマップを解析できませんでした[解決済み]**<br>
https://bobbyhadz.com/blog/failed-to-parse-source-map-in-create-react-app

# React-Markdownのcomponentsエラー
### エラー症状
```shell
Type 'FC<CodeBlockProps>' is not assignable to type 'keyof IntrinsicElements | Component<ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps> | undefined'.
Type 'FunctionComponent<CodeBlockProps>' is not assignable to type 'FunctionComponent<ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps>'.
    Type 'ReactNode' is not assignable to type 'string | Element | null | undefined'.
      Type 'number' is not assignable to type 'string | Element | null | undefined'.
```
### 修正前
### Article.tsx
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
### 修正後
- 型の指定がよくわからなかったので、別のファイルに書くのをやめた
```tsx
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
        const {children, className, node, ...rest} = props      
        const match = /language-(\w+)/.exec(className || '')
        const lang = match && match[1] ? match[1] : "";
        return match ? (
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
        ) : (
            <code {...rest} className={className}>
            {children}
            </code>
        )
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
```
### 参考URL
**Customizing the react markdown footnote component**<br>
https://github.com/orgs/remarkjs/discussions/1270