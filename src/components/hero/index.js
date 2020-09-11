import React from "react"
import { Section, H1, H2 } from "./styles"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import hero from "../../images/hero.svg"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section>
      <H1>FullStack Développeur</H1>
      <H2>
        I design and code beautifully simple things, and I love what I do.
      </H2>
      <Img
        fluid={data.avatar.childImageSharp.fluid}
        style={{
          margin: "75px auto 400px auto",
          width: "232px",
          height: "232px",
        }}
      />
      <img src={hero} alt="hero" />
    </Section>
  )
}

export default Hero
