import "./CampoTexto.css"




const CampoTexto = (props)=> {
    
    
    
    const aoDigitar = (e)=>{
            props.Alterado(e.target.value)
    }
    return (
        

        <div className="inputTexto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;