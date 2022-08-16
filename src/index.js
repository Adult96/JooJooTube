import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import JooJooTube from './service/joojootube';

const joojootube = new JooJooTube(process.env.REACT_APP_JOOJOOTUBE_API_KEY);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App joojootube={joojootube} />
  </React.StrictMode>
);
