import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Head, NavLink, Lien, HeaderContainer, ButtonContainer } from "./style"
import { MdClose } from "react-icons/md"

const Header = ({ contact }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Head contact={contact}>
      <HeaderContainer>
        <div style={{ flex: "1" }}>
          <Link to="/">
            <img src={data.logo.publicURL} alt="My Logo" height={50} />
          </Link>
        </div>

        {contact ? (
          <>
            <ButtonContainer>
              <Link to="/">
                <MdClose size={30} color="#7510F7" />
              </Link>
            </ButtonContainer>
          </>
        ) : (
          <NavLink contact={contact}>
            <Lien to="/contact">Contact</Lien>
          </NavLink>
        )}
      </HeaderContainer>
    </Head>
  )
}

export default Header
