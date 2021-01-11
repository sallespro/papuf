import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div>
        {/* <div className="flex flex-col min-h-screen bg-white"> */}

        <nav
          id="header"
          className="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-red-400 mt-4"
        >
          <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
            <label for="menu-toggle" className="cursor-pointer md:hidden block">
              <svg
                class="fill-current text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div
              className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
              id="menu"
            >
              <nav>
                <ul className="md:flex items-center justify-between text-base text-black pt-4 md:pt-0">
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-red-600 font-medium text-lg py-2 px-4 lg:-ml-2"
                      to="/produto/"
                    >
                      Apresentação
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-red-600 font-medium text-lg py-2 px-4 lg:-ml-2"
                      to="/produto/"
                    >
                      Produtos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-red-600 font-medium text-lg py-2 px-4 lg:-ml-2"
                      to="/produto/"
                    >
                      Revendedores
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
              id="nav-content"
            >
              <div className="auth flex text-red-600 font-semibold items-center w-full md:w-full">
                <p>Optimate</p>
                {/* <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
               <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button> */}
              </div>
            </div>
          </div>
        </nav>
        {/* <header className="p-4 bg-gray-400 text-red-700 font-semibold">
          <h1 className="max-w-4xl mx-auto">Optimate</h1>
          <p><Link to="/produto/">produtos</Link></p>
        </header> */}
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          2020 &copy; optimate
        </footer>
      </div>
    </>
  )
}

export default Layout
