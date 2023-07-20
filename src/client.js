import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

// See https://reactjs.org/docs/strict-mode.html
function StrictApp() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  createRoot(rootElement).render(<StrictApp />);
}

if (module.hot) {
  module.hot.accept();
}
