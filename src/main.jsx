import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { WhiteListProvider } from './context/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WhiteListProvider>
      <App />
      <ToastContainer autoClose={10000} />
    </WhiteListProvider>
  </React.StrictMode>
);
