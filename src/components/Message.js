import Section from "./Section"
import SectionContent from "./SectionContent"

const Message = ({ message }) => {
  return (
    <Section>
      <SectionContent>
        <strong>{message}</strong>
      </SectionContent>
    </Section>
  )
}

export default Message
