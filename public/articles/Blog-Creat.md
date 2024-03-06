# Blogの作成
このBlogの作成記録を書いています。

# 作った経緯
ITエンジニアとしてのスキルアップと、
日々の成果を記録するために作りました。

# 作成日
2024/02/24

# directory
- 2024/03/06
```python
portfolio
┣ .github/workflow/depoloy-gh-pages.yml #Github Actionsでデプロイするためのymlファイル
┣ node_modules
┣ public
┃  ┣ article #記事が書かれたファイルがある
┃  ┣ images #記事の画像
┃  ┣ ...
┣ src
┃  ┣ component
┃  ┃  ┣ content
┃  ┃  ┃  ┣ Article.tsx #記事の表示
┃  ┃  ┃  ┣ Blog.tsx    #タイトルモーダルの表示
┃  ┃  ┃  ┣ Router.tsx  #Route管理
┃  ┃  ┣ markdown #markdownを表示する
┃  ┃  ┃  ┣ CodeBlock.tsx
┃  ┃  ┃  ┣ Markdown.css
┃  ┃  ┃  ┣ Mdimage.tsx
┃  ┣ App.tsx
┃  ┣ App.css
┃  ┣ index.tsx
┃  ┣ vite.config.js
┃  ┣ ...
┣ .gitignore
┣ package-lock.json
┣ package.json
┣ README.md
┣ tsconfig.json
```
