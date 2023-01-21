import { useState } from 'react'

import Header from './components/Header'
import CaracterSearch from './components/CaracterSearch'
import CaracterDetails from './components/CaracterDetails'
import CaracterList from './components/CaracterList'

// api doc
// https://javascript.rickandmortyapi.com/index.html

// - Isolar componentes
// - Exibir nome dos episodios
// - Finalizar estilos

const App = () => {
  const [caracterName, setCaracterName] = useState('')
  const [caracters, setCaracters] = useState([])
  const [caracter, setCaracter] = useState(null)
  const [info, setInfo] = useState({})
  const [fetching, setFetching] = useState(false)

  return (
    <div>
      <Header />

      <CaracterSearch 
        fetching={fetching} 
        setFetching={setFetching}
        setCaracters={setCaracters}
        setInfo={setInfo}
        caracterName={caracterName}
        setCaracterName={setCaracterName}
      />

      {Boolean(caracter) && (
        <CaracterDetails caracter={caracter} setCaracter={setCaracter}/>
      )}
 

      {Boolean(caracters.length && !caracter) && (
        <CaracterList 
          info={info} 
          setInfo={setInfo}
          caracters={caracters} 
          setCaracters={setCaracters}
          setCaracter={setCaracter} 
          caracterName={caracterName}
        />
      )}

    </div>
  )
}

export default App
