import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div>
        {/* <div className="flex flex-col min-h-screen bg-white"> */}

        <header>
          <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-3 ">
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                  <div className="text-xl font-semibold text-gray-700">
                    <div className="inline text-gray-700 text-xl font-bold">
                      Opti
                    </div>
                    <div className="inline text-red-700 text-xl font-bold">mate</div>
                  </div>

                  <div class="flex md:hidden">
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                      aria-label="toggle menu"
                    >
                      <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                        <path
                          fill-rule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="hidden -mx-4 md:flex md:items-center">
                  <Link
                    className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                    to="/"
                  >
                    Apresentação
                  </Link>
                  <Link
                    className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                    to="/produto/"
                  >
                    Produtos
                  </Link>
                  <Link
                    className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                    to="/produto/"
                  >
                    Revendedores
                  </Link>

                  <Link
                    className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                    to="/contato/"
                  >
                    contato
                  </Link>
                </div>
              </div>
            </div>
          </nav>


        </header>
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
