import "./ListaSuspensa.css"

const ListaSuspensa = (props)=>{
    return(
       <div className="listaSuspensa">
            <label>{props.label}</label>
            <select onChange={e => props.Alterado(e.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
       </div>
    )
}

export default ListaSuspensa


