import hexToRgba from "hex-to-rgba"
import Colaborador from "../Colaborador"
import "./Time.css"

const Time = ({time, colaboradores, mudaCor})=>{
    return(
        colaboradores.length > 0 &&
        <section className="time" style={{backgroundColor: hexToRgba(time.cor, 0.6)}}>
            <input onChange={event => mudaCor(event.target.value, time.id)} type="color" className="colorSet"/>
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => 
                <Colaborador 
                    corDeFundo={time.cor} 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} />)}
            </div>
        </section>
       
    )
}

export default Time