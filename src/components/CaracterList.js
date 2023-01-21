import { useState } from 'react'
import { getCharacters } from 'rickmortyapi'

import Section from "./Section"
import SectionContent from "./SectionContent"

const CaracterList = ({ info, setInfo, caracters, setCaracters, setCaracter, caracterName }) => {
  const [actualPage, setActualPage] = useState(1) 

  console.log(caracterName)

  const handlePrevPage = async () => {
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

  return (
    <Section>
      <SectionContent>
        <h2>{info.count} resultados</h2>
        <ul className='caracteres-list'>
          {caracters.map((caracter) => (
            <li key={caracter.id} onClick={() => setCaracter({...caracter})}>
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
      </SectionContent>
    </Section>
  )
}

export default CaracterList
