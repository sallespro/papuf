import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = ({
  data: {
    allSitePage: { nodes: pages },
  },
}) => (
  <Layout>
    <div className="bg-gray-800 rounded-md p-4 max-w-lg w-full mx-auto mt-4">
      <div className="flex space-x-12">
        <div className="rounded-full bg-red-400 h-12 w-12"></div>
        
        <button className="w-1/2 flex items-center justify-center rounded-md bg-red-400  transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
  
</button>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 bg-red-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-8 bg-red-400 rounded w-1/2"></div>
            <div className="h-4 bg-red-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>

    {/* <span className="flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
</span> */}
    {/* {pages.map((page, index) => (
      <>
        <Link key={index} to={page.path}>{page.path}</Link>
        <br />
      </>
    ))} */}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    # allSitePage(filter: { path: { regex: "/services/" } }) {
    allSitePage(sort: { fields: path, order: ASC }) {
      nodes {
        path
      }
    }
  }
`
