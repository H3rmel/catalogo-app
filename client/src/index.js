// ReactJS 
import React from 'react';
import {render} from 'react-dom';

// React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Rotas
import App from './app/App';
import Resumo from './app/routes/Resumo';
import Produto from './app/routes/Produto';
import Entrega from './app/routes/Entrega';

// CSS do Webapp
import "./index.css";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/resumo" element={<Resumo/>} />
      <Route path="/produto/:id" element={<Produto/>} />
      <Route path="/entrega" element={<Entrega/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);