import React from 'react';
import ReactDOM from 'react-dom/client';

import TonTokenLandingPage from './TonTokenLandingPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TonTokenLandingPage />
  </React.StrictMode>
);
