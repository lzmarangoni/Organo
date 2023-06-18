
import Colaborador from "../Colaborador"
import "./Time.css"

const Time = ({time, colaboradores, mudaCor})=>{
    return(
        colaboradores.length > 0 &&
        <section className="time" style={{backgroundColor: time.corPrimaria}}>
            <input onChange={event => mudaCor(event.target.value, time.nome)} type="color" className="colorSet"/>
            <h3 style={{borderColor: time.corSecundaria}}>{time.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => 
                <Colaborador 
                    corDeFundo={time.corSecundaria} 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} />)}
            </div>
        </section>
       
    )
}

export default Time