import SectionContent from "./SectionContent"
import Section from "./Section"

import styles from './CaracterDetails.module.css'

const CaracterDetails = ({ caracter, setCaracter }) => {
  const clearCaracter = () => {
    setCaracter(null)
  }

  return (
    <Section>
      <SectionContent>
        <div className={styles['caracter-detail-card']}>
          <img src={caracter.image} alt={caracter.name} className={styles.image}/>
          <ul className={styles['caracter-list-info']}>
            <li>
              <img className={styles['info-icon']} src='./imgs/name-icon.png' alt='' />Name: {caracter.name}
            </li>
            <li>
              <img className={styles['info-icon']} src='./imgs/gender-icon.png' alt='' />Genero: {caracter.gender}
            </li>
            <li>
              <img className={styles['info-icon']} src='./imgs/species-icon.png' alt='' />Espécie: {caracter.species}
            </li>
            <li>
              <img className={styles['info-icon']} src='./imgs/location-icon.png' alt='' />Última localização conhecida: {caracter.location.name}
            </li>
            <li>
              <img className={styles['info-icon']} src='./imgs/origin-icon.png' alt='' />Local de origem: {caracter.origin.name}
            </li>
            <li>
              <img className={styles['info-icon']} src='./imgs/status-icon.png' alt='' />Status: {caracter.status} 
            </li>
          </ul>
          <button className={styles['button-back']} onClick={clearCaracter}>Voltar</button>
        </div>
      </SectionContent>
    </Section>
  )
}

export default CaracterDetails 
