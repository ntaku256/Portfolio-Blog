# Go-React-Todo
### Go(Echo)とReactでTODOアプリを作ってみる
- <https://zenn.dev/tara_is_ok/scraps/12503e502218f0>
- <https://zenn.dev/tara_is_ok/scraps/fcdd5bf4e44b75>

### Directory
```
root
┣ go-todo-api (backend)
┃  ┣ controller
┃  ┣ db
┃  ┣ migrate
┃  ┣ models
┃  ┣ repository
┃  ┣ router
┃  ┣ usecase
┃  ┣ vaildator
┃  ┣ .env
┃  ┣ docker-compose.yml
┃  ┣ go.mod
┃  ┣ go.sum
┃  ┗ main.go
┗ react-todo (frontend)
   ┣ src
   ┣ public
   ┣ node_modules (gitignore) 
   ┣ package.json
   ┣ tsconfig.json
   ┣ .env
   ┣ .eslintrc.cjs
   ┣ package.json
   ┣ tailwind.config.js
   ┣ tsconfig.node.json
   ┗ vite.config.ts
```

# Run
- frontend
```
npm start dev
```
- backend
```
go run main.go
```
