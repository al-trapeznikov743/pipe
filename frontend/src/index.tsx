import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {StoreProvider} from './app/providers/StoreProvider';
import {ThemeProvider} from '@/app/providers/ThemeProvider';
import {App} from '@/app/App';
import './app/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider initialState={{user: {}}}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);