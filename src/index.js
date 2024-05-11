import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/password_container.css';
import reportWebVitals from './reportWebVitals';
import PasswordContainer from './components/PasswordContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PasswordContainer/>
  </React.StrictMode>
);

reportWebVitals(console.log);
