import styles from './SectionContent.module.css'

const SectionContent = ({ children }) => {
  return (
    <div className={styles['section-content']}>{children}</div>
  )
}

export default SectionContent
