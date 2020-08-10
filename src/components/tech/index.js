import React from "react"
import { Container, H3 } from "../style"
import { PriceContainer, Price } from "./styles"
// import { RiPencilRuler2Line, RiPagesLine, RiServerLine } from "react-icons/ri"
import { GiMicrochip, GiMuscleUp, GiBrain } from "react-icons/gi"

const Tech = () => {
  return (
    <Container>
      <PriceContainer>
        <Price>
          <GiMicrochip size={50} color="#7510F7" />
          <H3>Technologies</H3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>PUG</li>
            <li>
              JavaScript <span>&hearts;</span>
            </li>
            <li>Graphql</li>
            <li>React / React Native</li>
            <li>Framer</li>
            <li>Gatsby</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Node</li>
            <li>Firebase</li>
            <li>GIT</li>
            <li>Bases de données SQL / NOSQL</li>
          </ul>
        </Price>
        <Price>
          <GiMuscleUp size={50} color="#7510F7" />
          <H3>Competences</H3>
          <ul>
            <li> Développement REST / Graphql API</li>
            <li> Responsive Design</li>
            <li> Développement front-end</li>
            <li> Développement mobile</li>
            <li>UI Design (web et mobile)</li>
          </ul>
        </Price>
        <Price>
          <GiBrain size={50} color="#7510F7" />
          <H3>Initiations</H3>
          <ul>
            <li>Angular</li>
            <li>TypesScript</li>
            <li>Docker</li>
            <li>Python</li>
            <li>PHP</li>
            <li>Java</li>
            <li>C</li>
            <li>Jest</li>
          </ul>
        </Price>
      </PriceContainer>
    </Container>
  )
}

export default Tech
