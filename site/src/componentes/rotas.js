import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { CursoPage } from '../pages/cursos/principal'
import { ContatoPage } from '../pages/contato/principal'


export const Rotas = props => {
    return (
        <Switch>
            <Route path="/cursos" component={CursoPage}/>
            <Route path="/contato" component={ContatoPage}/>
        </Switch>
    )
}