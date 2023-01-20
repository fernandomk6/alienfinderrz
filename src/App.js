import { useState } from 'react'
import { getCharacters } from "rickmortyapi"

// api doc
// https://javascript.rickandmortyapi.com/index.html

// - Desenvolver a lógica de paginação

const App = () => {
  const [caracterName, setCaracterName] = useState('rick')
  const [caracters, setCaracters] = useState([])
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
  return (
    <div>
      <h1>Alien Finderrz</h1>
      
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input 
              value={caracterName} 
              onChange={handleCaracterNameChange} 
              disabled={fetching}
              autoFocus
            />
          </form>
        </div>
      </div>

      {Boolean(caracters.length) && (
        <div>
          {console.log(info)}
          {console.log(caracters)}
          <div>
            <h2>{info.count} resultados</h2>
            <ul>
              {caracters.map((caracter) => (
                <li key={caracter.id}>{caracter.name}</li>
              ))}
            </ul>
            <span>Pagina: {actualPage} de {info.pages}</span>
            <button onClick={handlePrevPage} disabled={!info.prev}>Página anterior</button>
            <button onClick={handleNextPage} disabled={!info.next}>Proxíma página</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
