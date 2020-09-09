import React from "react"
import { Foot, Span } from "./styles"
import { graphql, useStaticQuery } from "gatsby"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"

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

      <div>
        <a href="https://github.com/P3drodeSousa" target="blank">
          <AiFillGithub size={30} color="white" />
        </a>
        <a href="https://github.com/P3drodeSousa" target="blank">
          <AiOutlineMail size={30} color="white" />
        </a>
      </div>

      <Span copy>© {new Date().getFullYear()} Pedro de Sousa</Span>
    </Foot>
  )
}

export default Footer
