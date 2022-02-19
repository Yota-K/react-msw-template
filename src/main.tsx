import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { setupWorker, rest } from "msw";

if (import.meta.env.MODE) {
  const worker = setupWorker(
    rest.get("https://myapi.dev/csr", (req, res, ctx) => {
      return res(
        ctx.json({
          title: "CSR Source",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        })
      );
    })
  );

  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
