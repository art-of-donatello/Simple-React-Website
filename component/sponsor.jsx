import React from 'react'
import Img from 'next'
const Sponsors = [

  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      '../images/logos/tkmspor.webp',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      '../images/logos/kayak.png',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
    '../images/logos/ganiyalcin.webp',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
    '../images/logos/teleferik.png',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
    '../images/logos/alfa.png',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
    '../images/logos/canatlogo.png',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
    '../images/logos/ege.jpg',
  }

]


function Sponsor() {
  return ( 
    
   
    <div className=" container px-5 mx-auto sm:pt-0 pt-12 ">
      
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap items-center justify-center">

          {
            Sponsors.map((sponsor)=>(
              <div key={sponsor.image} className="w-6/12 xl:w-1/4 lg:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 hover:bg-gray-200 xl:pb-10 pb-16 items-center">
              <img id='reflogo' tabIndex={0} className="focus:outline-none max-h-36" src={sponsor.image} alt="Adidas" role="img" />
            </div>
            ))
          }
         
        </div>
      </div>
  )
}

export default Sponsor