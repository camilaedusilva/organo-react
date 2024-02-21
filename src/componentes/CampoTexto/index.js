import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModify = `${props.placeholder}...`

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModify}/>
        </div>
    )
   
} 

export default CampoTexto