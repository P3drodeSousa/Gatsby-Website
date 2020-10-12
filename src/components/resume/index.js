import React from "react"
import { Container } from "../style"
import { Section, TitleContainer, Button } from "./styles"
import downloadFile from "../../assets/cv.pdf"
const Resume = () => {
  return (
    <Container>
      <Section>
        <TitleContainer>
          <h1>Si vous le souhaitez, vous pouvez consulter mon CV.</h1>
        </TitleContainer>
        <div>
          <Button>
            <a href={downloadFile} download>
              Donwload
            </a>
          </Button>
        </div>
      </Section>
    </Container>
  )
}

export default Resume
