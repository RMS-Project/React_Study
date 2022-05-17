import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Repositories from './Repositories';

export default function RoutesAPP() {
  return (
    {/* Componente fundamental para criar as rotas no react-router-dom */},
    <BrowserRouter>
      {/* Possui todas as rotas da aplicação */}
      <Routes>
        {/* Rotas */}
        <Route exact path='/' component={Home}/>
        <Route exact path='/repositories' component={Repositories}/>
      </Routes>
    </BrowserRouter>
  )
}