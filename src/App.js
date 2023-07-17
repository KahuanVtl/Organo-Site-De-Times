import { useState } from 'react';
import Banner from './componentes/Banner/Index';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time';


function App() {

  const times = [
    {nome: 'Desenvolvedores',
    corPrimaria: '#D9F7E9',
    corSecundaria: '#57C278'
  },
    {nome: 'Front-End',
    corPrimaria: '#E8F8FF',
    corSecundaria: '#82CFFA'
  },
    {nome: 'Devops',
    corPrimaria: '#FDE7E8',
    corSecundaria: '#E06B69'
  },
    {nome: 'Data Science',
    corPrimaria: '#F0F8E2',
    corSecundaria: '#A6D157'
  },
    {nome: 'UX',
    corPrimaria: '#FAE9F5',
    corSecundaria: '#DB6EBF'
  },
    {nome: 'Mobile',
    corPrimaria: '#FFF5D9',
    corSecundaria: '#FFBA05'
  },
    {nome: 'Inovação',
    corPrimaria: '#FFEEDF',
    corSecundaria: '#FF8A29'},
  ]

  const[colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaboradores)} />
      
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}

    </div>
  );
}

export default App;
