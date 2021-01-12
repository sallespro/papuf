import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
   
        <div className="min-w-screen min-h-screen bg-gray-300 flex items-center justify-center px-5 py-5">
          <div className="rounded shadow-xl overflow-hidden w-full md:flex">
            <div className="flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-indigo-500 text-white items-center">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <div className="flex w-full md:w-1/2 p-10 bg-white text-gray-600 items-center">
              <div className="w-full">


                <div className="flex w-full items-end mb-6">
                  <span className="block leading-none text-3xl text-gray-800">
                    {frontmatter.title}
                  </span>
                  <span className="block leading-5 text-sm ml-4 text-green-500"></span>
                </div>

                <div className="flex w-full text-xs"></div>
              </div>
            </div>
          </div>
        </div>
    
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
