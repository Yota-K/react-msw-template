# react-msw-template
React、MSWのテンプレート。

## MSWとは?
ブラウザリクエストを Service Worker がインターセプトし、任意のレスポンスを返すことが出来るライブラリ。

https://mswjs.io/

## Service Workerとは?
ユーザーに見えるWebページの裏側で動かせるイベント駆動のJavaScript環境のこと。

https://qiita.com/poster-keisuke/items/00056b8d5d6275afdb1a

## 初期設定
https://mswjs.io/docs/getting-started/integrate/browser

NextJS・Viteの場合

```sh
npx msw init public/ --save
```
