import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho'
import { CursoCRUD } from '../../componentes/cursos/crud'

export const CursoPage = props => {

    return (
        <div className='container'>
            <Cabecalho titulo="Cursos" subtitulo="Cadastro de cursos"/>
            <CursoCRUD/>
        </div>
    )
}
