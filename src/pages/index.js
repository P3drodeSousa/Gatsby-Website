import React from "react"
import Layout from "../components"
import Hero from "../components/hero"
import Description from "../components/description"
import Tech from "../components/tech"
import Resume from "../components/resume"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/Seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Hero />
      <Description />
      <Tech />
      <Resume />
      <Footer />
    </Layout>
  )
}
