import React from "react"
import Layout from "../components"
import Form from "../components/Form/Form"
import Header from "../components/header"
import { graphql, useStaticQuery } from "gatsby"

export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        publicURL
      }
      logoUser: file(relativePath: { eq: "avatar.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <Header contact={true} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={data.logoUser.publicURL}
          style={{ position: "absolute", top: "-45px" }}
          alt="My Logo"
          height={90}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <Form />
      </div>
    </Layout>
  )
}
