import { useState } from 'react'
import { getCharacters } from "rickmortyapi"

// api doc
// https://javascript.rickandmortyapi.com/index.html

// - Estilizar!!!

const App = () => {
  const [caracterName, setCaracterName] = useState('')
  const [caracters, setCaracters] = useState([])
  const [caracter, setCaracter] = useState(null)
  const [info, setInfo] = useState({})
  const [fetching, setFetching] = useState(false)
  const [actualPage, setActualPage] = useState(1) 

  const handleCaracterNameChange = (e) => {
    setCaracterName(e.target.value)
  }

  const handlePrevPage = async () => {
    console.log('prev page show')
    const prevPage = actualPage - 1


    try {
      const reponse = await getCharacters({ name: caracterName, page: prevPage })
      if (reponse.status !== 200) {
        throw new Error('Nenhum resultado encontrado')
      }
      
      const caractersCopy = [...reponse.data.results]
      const infoCopy = {...reponse.data.info}

      setCaracters(caractersCopy)
      setInfo(infoCopy)
      setActualPage(prevPage)
    } catch (error) {
      console.log(error)
    }

  }

  const handleNextPage = async () => {
    console.log('next page show')
    const nextPage = actualPage + 1
    
    try {
      const reponse = await getCharacters({ name: caracterName, page: nextPage })
      if (reponse.status !== 200) {
        throw new Error('Nenhum resultado encontrado')
      }
      
      const caractersCopy = [...reponse.data.results]
      const infoCopy = {...reponse.data.info}

      setCaracters(caractersCopy)
      setInfo(infoCopy)
      setActualPage(nextPage)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFetching(true)

    console.log(`start searching by ${caracterName}`)

    try {
      const reponse = await getCharacters({ name: caracterName })
      if (reponse.status !== 200) {
        throw new Error('Nenhum resultado encontrado')
      }

      const caractersCopy = [...reponse.data.results]
      const infoCopy = {...reponse.data.info}

      setCaracters(caractersCopy)
      setInfo(infoCopy)
    } catch (error) {
      console.log(error)
    }

    setFetching(false)
  }

  const showCaracter = (caracter) => {
    setCaracter({...caracter})
  }

  const clearCaracter = () => {
    setCaracter(null)
  }

  return (
    <div>
      <header>
        <h1>Alien Finderrz</h1>
      </header>
      
      <section>
        <div>
          <form onSubmit={handleSubmit}>
            <input 
              className='search-input'
              placeholder='Search'
              value={caracterName} 
              onChange={handleCaracterNameChange} 
              disabled={fetching}
              autoFocus
            />
          </form>
        </div>
      </section>
      
      {Boolean(caracter) && (
        <div>
          <span>{caracter.name}</span>
          <button onClick={clearCaracter}>Voltar</button>
        </div>

      )}
 

      {Boolean(caracters.length && !caracter) && (
        <section>
          {console.log(info)}
          {console.log(caracters)}
          <div>
            <h2>{info.count} resultados</h2>
            <ul className='caracteres-list'>
              {caracters.map((caracter) => (
                <li key={caracter.id} onClick={() => showCaracter(caracter)}>
                  <img src={caracter.image} alt={caracter.name}></img>
                  <span>{caracter.name}</span>
                </li>
              ))}
            </ul>
            <div className='pages'>
              <span>Pagina: {actualPage} de {info.pages}</span>
              <div>
                <button onClick={handlePrevPage} disabled={!info.prev}>Anterior</button>
                <button onClick={handleNextPage} disabled={!info.next}>Proxímo</button>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  )
}

export default App
