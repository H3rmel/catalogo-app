// ReactJS 
import React from 'react';
import {render} from 'react-dom';

// React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Rotas
import App from './app/App';
// import Teste from './app/routes/Teste';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      {/* <Route path="/teste" element={<Teste/>} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);