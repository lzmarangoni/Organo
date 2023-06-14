
import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props)=>{
    function aoDeletar(){
        console.log("deletado")
    }
    return(
        props.colaboradores.length > 0 &&
        <section className="time" style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nomeDoTime}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corSecundaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} onClick={aoDeletar} />)}
            </div>
        </section>
       
    )
}

export default Time