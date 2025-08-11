import React from 'react';
import ReactDOM from 'react-dom/client';
import Resume from './Resume';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Resume />
    </HelmetProvider>
  </React.StrictMode>
);
