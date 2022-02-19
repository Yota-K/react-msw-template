import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { setupWorker } from "msw";
import { handlers }from './mocks/handlers';

if (import.meta.env.MODE) {
  const worker = setupWorker(...handlers);
  worker.start();
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
