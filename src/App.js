import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';


function App() {
  
  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      corPrimaria:'#d9f7e9' ,
      corSecundaria: '#57C278',
    },
    {
      nome:'Front-End' ,
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA',
    },
    {
      nome:'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157',
    },
    {
      nome:'Devops' ,
      corPrimaria: 'FDE7E8',
      corSecundaria:'#E06B69' ,
    },    
    {
      nome:'Ux e Design' ,
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF',
    },
    {
      nome:'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05',
    },
    {
      nome:'Inovação e Gestão' ,
      corPrimaria: '#FFEEDF',
      corSecundaria:'#FF8A29',
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

  
function mudarCorDoTime(cor, nome){
  setTimes(times.map( time => {
    if(time.nome === nome){
      time.corSecundaria = cor
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

