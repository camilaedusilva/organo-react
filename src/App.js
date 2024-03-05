import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Form';

function App() {

  const [colaboradores, setColaboradores] = useState ([])

  const addNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores , colaborador])
    console.log(colaborador)

  }

  return (
    <div className="App">

        <Banner />
        <Formulario aoColaboradorCadastrado={colaborador => addNovoColaboradorAdicionado(colaborador)}/>

    </div>
  );
}

export default App;
