import { useState } from 'react'
import { getCharacters } from 'rickmortyapi'

import Section from "./Section"
import SectionContent from "./SectionContent"

import styles from './CaracterList.module.css'

const CaracterList = ({ info, setInfo, caracters, setCaracters, setCaracter, caracterName }) => {
  const [actualPage, setActualPage] = useState(1) 

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
        <ul className={styles['caracter-list']}>
          {caracters.map((caracter) => (
            <li key={caracter.id} onClick={() => setCaracter({...caracter})} tabIndex='0' className={styles['caracter-card']}>
              <img src={caracter.image} alt={caracter.name}></img>
              <span>{caracter.name}</span>
            </li>
          ))}
        </ul>
        <div className={styles['page-actions']}>
          <span>Página: {actualPage} de {info.pages}</span>
          <div className={styles['page-buttons']}>
            <button className={styles['page-button']} onClick={handlePrevPage} disabled={!info.prev}>Anterior</button>
            <button className={styles['page-button']} onClick={handleNextPage} disabled={!info.next}>Proxímo</button>
          </div>
        </div>
      </SectionContent>
    </Section>
  )
}

export default CaracterList
