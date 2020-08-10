import React from "react"
import { Foot, Span } from "./styles"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logoWhite.png" }) {
        publicURL
      }
    }
  `)
  return (
    <Foot>
      <img src={data.logo.publicURL} alt="My Logo" height={50} />
      <Span>
        Living, learning, & leveling <br />
        up one day at a time.
      </Span>
      <Span copy>© {new Date().getFullYear()} Pedro de Sousa</Span>
    </Foot>
  )
}

export default Footer
