import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/tweet-cards">
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
