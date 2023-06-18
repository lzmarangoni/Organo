import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"
import { v4 as uuidv4 } from 'uuid';

    const Formulario = (props) => {

        const [nome, setNome] = useState('')
        const [cargo, setCargo] = useState('')
        const [imagem, setImagem] = useState('')
        const [time, setTime] = useState('')
        const id = uuidv4()

        const aoSalvar = (evento) => {
            evento.preventDefault()
            props.aoColaboradorCadastrado({
                id,
                nome, 
                cargo, 
                imagem, 
                time
            })
            setNome('')
            setCargo('')
            setImagem('')
            setTime('')
        
                
        }
        return (
            <section className="formulario">
                <form onSubmit={aoSalvar}>
                    <h1>Preencha os dados para criar o card do colaborador.</h1>
                    <CampoTexto 
                        obrigatorio={true}  
                        label="Nome" 
                        placeholder="Digite o seu nome" 
                        valor={nome}
                        Alterado={valor => setNome(valor)}
                    />
                    <CampoTexto 
                        obrigatorio={true}  
                        label="Cargo" 
                        placeholder="Digite o seu cargo" 
                        valor={cargo}
                        Alterado={valor => setCargo(valor)}
                    />
                    <CampoTexto 
                        obrigatorio={true}  
                        label="Imagem" 
                        placeholder="Informe o endereço da sua imagem"
                        valor={imagem}
                        Alterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa 
                        obrigatorio={true} 
                        label="Time" 
                        itens={props.time}
                        valor={time}
                        Alterado={valor => setTime(valor)}
                    />
                    <Botao>Criar Card</Botao>
                </form>
            </section>
        )
    }

export default Formulario