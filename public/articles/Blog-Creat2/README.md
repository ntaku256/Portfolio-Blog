# 起こったこと
- React Routerのところで合っているはずなのに、エラーを吐いた
```
react-dom.production.min.js:189 Error
    at s (history.ts:494:11)
    at O (hooks.tsx:104:3)
    at Tl (Router.tsx:7:20)
    at Ei (react-dom.production.min.js:167:137)
    at Eu (react-dom.production.min.js:290:337)
    at ks (react-dom.production.min.js:280:389)
    at vs (react-dom.production.min.js:280:320)
    at ys (react-dom.production.min.js:280:180)
    at is (react-dom.production.min.js:271:88)
    at os (react-dom.production.min.js:268:429)
```
# 修正案
- BrowserRouterで囲う場所を変えた。
- どうやら、同じ現象が起きている人がたくさんいるみたいで安心した。
### 参考動画
- **useLocation() may be used only in the context of a Router component**<br>
https://www.youtube.com/watch?v=pU1r-Hc8_gM

# 修正前
- Router.tsx
```tsx
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/Article/:postId' element={<Article />}/>
    </Routes>
</BrowserRouter>
```

# 修正後
### Router.tsx
```tsx
<Routes>
    <Route path='/' element={<Blog/>}/>
    <Route path='/Article/:postId' element={<Article />}/>
</Routes>
```
### App.tsx
```tsx
<BrowserRouter basename={basePath}>
    <div className="App">
    <RouterComponent/>
    </div>
</BrowserRouter>
```