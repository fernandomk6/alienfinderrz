import { getCharacters } from "rickmortyapi"

const App = () => {
  // api doc
  // https://javascript.rickandmortyapi.com/index.html

  // - Desenvolver a lógica de paginação

  getCharacters({ name: 'rick' })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <div>
      <h1>Alien Finderrz</h1>
      
      <div>
        <div>
          <form>
            <input placeholder="rick sanchez" />
          </form>
        </div>
      </div>

      <div>
        <div>
          <h2>Resultados</h2>
          <ul>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
