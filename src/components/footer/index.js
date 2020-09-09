import React, { useState } from "react"
import { Foot, Span, SocialContainer } from "./styles"
import { graphql, useStaticQuery } from "gatsby"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"

const Footer = () => {
  const [color, setColor] = useState("white")
  const [color2, setColor2] = useState("white")

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

      <SocialContainer>
        <div
          onMouseEnter={() => setColor("#7510F7")}
          onMouseLeave={() => setColor("white")}
        >
          <a href="https://github.com/P3drodeSousa" target="blank">
            <AiFillGithub size={30} color={color} />
          </a>
        </div>
        <div
          onMouseEnter={() => setColor2("#7510F7")}
          onMouseLeave={() => setColor2("white")}
        >
          <a href="mailto:contact@pesousa.ch">
            <AiOutlineMail size={30} color={color2} />
          </a>
        </div>
      </SocialContainer>

      <Span copy>© {new Date().getFullYear()} Pedro de Sousa</Span>
    </Foot>
  )
}

export default Footer
