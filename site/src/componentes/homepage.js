import { Cabecalho } from '../../componentes/cabecalho'
import { CursoListagem } from '../../componentes/cursos/lista'

export const CursoPage = props => {
    return (
        <div className='container'>
            <Cabecalho titulo="ABC Cursos" subtitulo="Bem vindo a página!"/>
            <CursoListagem />
        </div>
    )
}