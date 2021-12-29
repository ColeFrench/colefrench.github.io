import React from 'react';
import { hydrate, render } from 'react-dom';
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

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrate(<StrictApp />, rootElement);
} else {
  render(<StrictApp />, rootElement);
}
