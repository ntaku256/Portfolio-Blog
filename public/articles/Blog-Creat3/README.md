# ローカルとリモートで異なるパスを扱う
- プログラムからパスを指定するときは絶対パスである必要がある
- ローカルではhttp://localhost:3000/ で、basepathが"/"である
- それに対してリモートではhttps://ntaku256.github.io/Portfolio-Blog/ でbasepathが"/Portfolio-Blog/"になる
- なのでローカルとリモートで`basepath`をそれぞれ指定する必要がある

# basepathを指定する
- 以下のプログラムを追加することで`basepath`を指定する
```tsx:App.tsx
import React from 'react';
import './App.css';
import RouterComponent from './components/content/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const basePath = process.env.PUBLIC_URL || "/";

  return (
    <BrowserRouter basename={basePath}>
      <div className="App">
        <RouterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;

```
```tsx
const basePath = process.env.PUBLIC_URL || "/";
<BrowserRouter basename={basePath}>
```
- これで変数である`basepath`にローカルとリモートで異なるパスを指定する