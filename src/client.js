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

if (rootElement.hasChildNodes()) {
  hydrate(<StrictApp />, rootElement);
} else {
  render(<StrictApp />, rootElement);
}

if (module.hot) {
  module.hot.accept();
}
