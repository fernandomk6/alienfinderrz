import { useState } from 'react'

import Header from './components/Header'
import CaracterSearch from './components/CaracterSearch'
import CaracterDetails from './components/CaracterDetails'
import CaracterList from './components/CaracterList'
import Message from './components/Message'

// api doc
// https://javascript.rickandmortyapi.com/index.html

// - Isolar componentes
// - Exibir nome dos episodios
// - Finalizar estilos

const App = () => {
  const [caracterName, setCaracterName] = useState('')
  const [caracter, setCaracter] = useState(null)
  const [caracters, setCaracters] = useState([])
  const [info, setInfo] = useState({})
  const [fetching, setFetching] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

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
        setErrorMessage={setErrorMessage}
      />

      {Boolean(errorMessage) && (
        <Message message={errorMessage} />
      )}

      {Boolean(fetching) && (
        <Message message='Carregando...' />
      )}

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
