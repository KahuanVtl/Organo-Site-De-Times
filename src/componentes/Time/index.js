import './Time.css'

function Time(props){
    const css = { backgroundColor: props.corPrimaria }

    return (
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
        </section>
    )
}

export default Time