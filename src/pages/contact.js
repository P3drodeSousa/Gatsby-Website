import React from "react"
import Layout from "../components"
import Form from "../components/Form/Form"

export default function Contact() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form />
      </div>
    </Layout>
  )
}
