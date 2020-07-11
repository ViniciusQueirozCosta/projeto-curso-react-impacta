import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import 'bootstrap/dist/js/bootstrap.min.js'

import { CursoPage } from './pages/cursos/principal'
import { ContatoPage } from './pages/contato/principal'
import { Menu } from './componentes/menu'
import { Rotas } from './componentes/rotas'


function App() {
  return (
    <div>
      <Menu />
      <Rotas />
    </div>
  );
}

export default App;
