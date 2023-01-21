import { getCharacters } from 'rickmortyapi'
import styles from './CaracterSearch.module.css'

import Section from './Section'
import SectionContent from './SectionContent'

const CaracterSearch = ({ fetching, setFetching, setCaracters, setInfo, caracterName, setCaracterName }) => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFetching(true)

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
    <Section>
      <SectionContent>
        <form onSubmit={handleSubmit}>
          <input 
            className={styles['search-input']}
            placeholder='Search'
            value={caracterName} 
            onChange={(e) => setCaracterName(e.target.value)} 
            disabled={fetching}
            autoFocus
          />
        </form>
      </SectionContent>
    </Section>

  )
}

export default CaracterSearch 
