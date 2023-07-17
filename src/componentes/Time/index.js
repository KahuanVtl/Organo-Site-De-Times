import Colaborador from '../Colaborador'
import './Time.css'

function Time(props){
    const css = { backgroundColor: props.corPrimaria }

    return (
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time