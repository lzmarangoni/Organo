import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [times, setTimes] = useState([
    { 
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome:'Front-End' ,
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome:'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome:'Devops' ,
      cor:'#E06B69' ,
    },    
    {
      id: uuidv4(),
      nome:'Ux e Design' ,
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome:'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome:'Inovação e Gestão' ,
      cor:'#FF8A29',
    }    
  ])

  const [colaboradores, setColaboradores] = useState([
    {
      nome:'Luiz',
      cargo:'Dev',
      imagem:'https://avatars.githubusercontent.com/u/98007645?v=4',
      time:'Mobile'
    }
  ]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  
function mudarCorDoTime(cor, id){
  setTimes(times.map( time => {
    if(time.id === id){
      time.cor = cor
    }return time
    }
     ))
}


  return (
    <div className="App">
      <Banner/>
      <Formulario time={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time 
        mudaCor={mudarCorDoTime}
        time={time}
        key={time.nome} 
        
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;

