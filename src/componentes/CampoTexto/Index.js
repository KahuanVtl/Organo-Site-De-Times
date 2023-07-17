import { useState } from 'react'
import './CampoTexto.css'

function CampoTexto(props){

    const placeholderModificada = `${props.placeholder}...`

    const [valor, setValor] = useState('Guilherme Silveira')

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto" >
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto