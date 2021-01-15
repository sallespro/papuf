import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"


export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 900, quality: 90, traceSVG: { color: "#2B2B2F" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
    # childImageSharp {
    #   fluid(maxWidth: 200, maxHeight: 200) {
    #     ...GatsbyImageSharpFluid
    #   }
    # }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          absolutePath: { regex: "/(jpg)/" }
        }
      ) {
        totalCount
        edges {
          node {
            name
            ...squareImage
          }
        }
      }
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid {
            base64
            # aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)
  const pics = data.allFile.edges
  return (
    <Layout>
      <div className="bg-gray-800 rounded-md p-4 max-w-lg w-full mx-auto mt-4">
        <div className="flex space-x-12">
          <div className="rounded-full bg-red-400 h-12 w-12"></div>

          <button className="w-1/2 flex items-center justify-center rounded-md bg-red-400  transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"></button>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-red-400 rounded w-3/4"></div>
            <div className="space-y-2">
              {pics.map(image => (
                <Img
                  className="bg-red-400 rounded w-48  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  key={image.node.childImageSharp.fluid.src}
                  fluid={image.node.childImageSharp.fluid}
                  // style={{ margin: '3rem 0' }}
                />
              ))}
              {/* <div className="h-8 bg-red-400 rounded w-1/2"></div>
            <div className="h-4 bg-red-400 rounded w-5/6"></div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <Img fluid={data.file.childImageSharp.fluid} alt="about" /> */}
    </Layout>
  )
}
