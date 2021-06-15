import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home'; // nao precisa colocar o nome do arquivo, pois por padrao o React pega o "index.js"

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
