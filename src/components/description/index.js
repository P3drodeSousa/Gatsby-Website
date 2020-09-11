import React from "react"
import { Container } from "../style"
import { Section } from "./style"

const Description = () => {
  return (
    <Section>
      <Container>
        <h1 style={{ marginBottom: "20px" }}>
          Salut je suis Pedro. Ravi de vous rencontrer.
        </h1>
        <p>
          Je suis un développeur web/Mobile full stack passionné qui s'intéresse
          de près au design d'interface. Ma spécialité est de construire des
          projets web de A à Z, en commençant par la définition du produit pour
          répondre au mieux aux besoins, en passant par la conception de
          l'outil, l'intégration des pages et le développement des différentes
          fonctionnalités. Sans oublier l'optimisation du référencement naturel
          et la mise en ligne. Que vous soyez une entreprise, une agence web ou
          un particulier, je serai contente de répondre à vos besoins..
        </p>
      </Container>
    </Section>
  )
}

export default Description
