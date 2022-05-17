import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Repositories from './Repositories';

export default function RoutesAPP() {
  /* Componente fundamental para criar as rotas no react-router-dom */
  /* Possui todas as rotas da aplicação */
  /* Rotas */
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/repositories' element={<Repositories/>}/>
      </Routes>
    </BrowserRouter>
  );
}