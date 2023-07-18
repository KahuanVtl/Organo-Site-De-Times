import Colaborador from '../Colaborador'
import './Time.css'

function Time(props){
    const css = { backgroundColor: props.corPrimaria }

    return (
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corSecundaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time