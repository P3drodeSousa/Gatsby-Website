import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Head, NavLink, Lien, HeaderContainer } from "./style"

const Header = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        publicURL
      }
    }
  `)

  console.log(location)

  return (
    <Head>
      <HeaderContainer>
        <div style={{ flex: "1" }}>
          <Link to="/">
            <img src={data.logo.publicURL} alt="My Logo" height={50} />
          </Link>
        </div>
        <NavLink>
          <Lien to="/contact">Contact</Lien>
        </NavLink>
      </HeaderContainer>
    </Head>
  )
}

export default Header
