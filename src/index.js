import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Definido propriedades como parâmetro para o componente App.*/ }
    <App title="Hello" user="Gama Academy"/>
  </React.StrictMode>
);

reportWebVitals();
