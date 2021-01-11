import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import renderImage from "../images/render.jpg"
import renderDetailImage from "../images/render-detail.jpg"
export default () => {
  return (
    <Layout>
      <div class="container  mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
        <div>
          <div>
            <div class="relative overflow-hidden pb-60">
              <img
                // class="absolute h-full w-full object-cover object-center"
                src={renderImage} 
                alt="optimate"
              />
            </div>
            <div class="flex">
              <div class="px-4 w-200 h-120 bg-red-600 flex justify-center items-center flex-col text-white font-bold text-center">
                <p class="text-2xl">optimate</p>
                {/* <p class="uppercase -mt-1">Sistemas Eletrônicos</p> */}
              </div>
              <div class="bg-white h-20 flex-grow flex items-center px-4">
                <p class="font-bold text-lg">Sistemas de Comunicação Satelital</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="relative overflow-hidden pb-60">
              <img
                //class="absolute h-full w-full object-cover object-center"
                src={renderDetailImage} 
                alt=""
              />
            </div>
            <div class="flex">
              <div class="w-200 h-20 bg-blue-300 flex justify-center items-center flex-col text-white font-bold text-center">
                <p class="px-4 text-2xl">Aplicações</p>
                {/* <p class="uppercase -mt-1">Jan</p> */}
              </div>
              <div class="bg-white h-20 flex-grow flex items-center px-4">
                <p class="font-bold text-lg">Infra-estrutura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-screen">
        <div className="h-4">
          <img src={renderImage} alt="Optimate" />
        </div>
        <div className="px-3 pt-20 pb-10 text-center z-10">
          <h2 className="font-bold text-white text-3xl mb-12">
            Sistemas de Comunicação Satelital
          </h2>
          <div>
            <Link
              class="bg-blue-500 rounded-md  text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2"
              to="/produto"
            >
              Saiba mais
            </Link>
            <Link
              class="bg-red-700 rounded-md  text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2"
              to="/contato"
            >
              Entre em contato
            </Link>
          </div>
        </div>
      </div> */}
    </Layout>
  )
}
