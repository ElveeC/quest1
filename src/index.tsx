import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './components/app/app';
import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { checkAuthAction, fetchQuestsAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction());
store.dispatch(fetchQuestsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
