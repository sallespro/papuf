import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"

/*
  1. write query 
  2. pass data into img component
*/

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="about"
      />
    </Layout>
  )
}
