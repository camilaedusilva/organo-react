import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModify = `${props.placeholder}...`

    //let valor ='Camila Silva';

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input  value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModify}/>
        </div>
    )
   
} 

export default CampoTexto