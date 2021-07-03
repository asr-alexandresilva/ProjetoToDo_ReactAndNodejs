import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home'; // nao precisa colocar o nome do arquivo, pois por padrao o React pega o "index.js"
import Task from './views/Task';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home></Home> */}
    <Task />
  </React.StrictMode>,
  document.getElementById('root')
);
