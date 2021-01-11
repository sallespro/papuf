import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div>
        <header>
          <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-3 ">
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                  <div className="text-xl font-semibold text-gray-700">
                    <div className="inline text-gray-700 text-xl font-bold">
                      cloudpilot
                    </div>
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
                    home
                  </Link>
                  <Link
                    className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                    to="/services/"
                  >
                    Services
                  </Link>
                  <Link
                    className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                    to="/products/"
                  >
                    Products
                  </Link>

                  <Link
                    className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                    to="contact/"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {children}
        {/* <footer className="py-2 text-center text-gray-600 text-xs">
         &copy; 2021 - salles pro services
        </footer> */}
      </div>
    </>
  )
}

export default Layout
