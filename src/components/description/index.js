import React from "react"
import { Container } from "../style"
import { Section } from "./style"

const Description = () => {
  return (
    <Section>
      <Container>
        <h1 style={{ marginBottom: "20px" }}>
          Hi, I’m Pedro. Nice to meet you.
        </h1>
        <p>
          Développeur Fullstack enthousiast et curieus, j’ai la chance de faire
          un métier qui me passionne. Intéressée par tout ce qui touche à mon
          domaine, j’effectue une veille quotidienne concernant les nouvelles
          technologies web et le design.
        </p>
      </Container>
    </Section>
  )
}

export default Description
