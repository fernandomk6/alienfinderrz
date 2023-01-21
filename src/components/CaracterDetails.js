import SectionContent from "./SectionContent"
import Section from "./Section"

const CaracterDetails = ({ caracter, setCaracter }) => {
  const clearCaracter = () => {
    setCaracter(null)
  }

  return (
    <Section>
      <SectionContent>
        <img src={caracter.image} alt={caracter.name}></img>
        <ul>
          <li>
            <img src='./imgs/name-icon.png' alt='' />Name: {caracter.name}
          </li>
          <li>
            <img src='./imgs/gender-icon.png' alt='' />Genero: {caracter.gender}
          </li>
          <li>
            <img src='./imgs/species-icon.png' alt='' />Espécie: {caracter.species}
          </li>
          <li>
            <img src='./imgs/location-icon.png' alt='' />Última localização conhecida: {caracter.location.name}
          </li>
          <li>
            <img src='./imgs/origin-icon.png' alt='' />Local de origem: {caracter.origin.name}
          </li>
          <li>
            <img src='./imgs/status-icon.png' alt='' />Status: {caracter.status}
          </li>
        </ul>
        <div>
          <span>Episódios em que aparece</span>
          <ul>
            {caracter.episode.map((episode, index) => (
              <option key={index}>{episode}</option>
            ))}
          </ul>
        </div>
        <button onClick={clearCaracter}>Voltar</button>
      </SectionContent>
    </Section>
  )
}

export default CaracterDetails 
