import React from "react"
import { Container } from "../style"
import { Section, TitleContainer, Button } from "./styles"

const Resume = () => {
  return (
    <Container>
      <Section>
        <TitleContainer>
          <h1>Si vous le souhaitez, vous pouvez consulter mon CV.</h1>
        </TitleContainer>
        <div>
          <Button>
            <a
              href="https://drive.google.com/file/d/1W58XoAiXe_JJzkbGPj6MH1PTC1jcqhbB/view?usp=sharing"
              target="blank"
              download
            >
              Donwload
            </a>
          </Button>
        </div>
      </Section>
    </Container>
  )
}

export default Resume
