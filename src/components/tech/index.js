import React from "react"
import { Container, H3 } from "../style"
import { PriceContainer, Price } from "./styles"
import { BsCodeSlash } from "react-icons/bs"
import { BiTask, BiBookBookmark } from "react-icons/bi"

const Tech = () => {
  return (
    <Container>
      <PriceContainer>
        <Price>
          <BsCodeSlash size={70} color="#7510F7" />
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
            <li>Node</li>
            <li>Firebase</li>
            <li>GIT</li>
            <li>Bases de données SQL / NOSQL</li>
          </ul>
        </Price>
        <Price>
          <BiTask size={70} color="#7510F7" />
          <H3>Competences</H3>
          <ul>
            <li> Développement REST / Graphql API</li>
            <li> Responsive Design</li>
            <li> Développement front-end</li>
            <li> Développement mobile</li>
            <li>UI Design (web et mobile)</li>
            <li>Gestion des bases de données</li>
            <li>Optimisation des applications clients</li>
            <li>Connaissances en PWA</li>
          </ul>
        </Price>
        <Price>
          <BiBookBookmark size={70} color="#7510F7" />
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
