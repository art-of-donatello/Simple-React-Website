import React from 'react'
const Sponsors = [

  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://cdn.tuk.dev/assets/adidas-dark.png',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://cdn.tuk.dev/assets/nike-dark.png',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://cdn.tuk.dev/assets/toyota-dark.png',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://cdn.tuk.dev/assets/channel-dark.png',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://cdn.tuk.dev/assets/gs1-dark.png',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://cdn.tuk.dev/assets/berry-dark.png',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://cdn.tuk.dev/assets/min-dark.png',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://cdn.tuk.dev/assets/honda-dark.png',
  },
]


function Sponsor() {
  return (
    
    <div className="container mx-auto pt-16">
      
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">

          {
            Sponsors.map((sponsor)=>(
              <div key={sponsor.image} className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 hover:bg-gray-200 xl:pb-10 pb-16 items-center">
              <img tabIndex={0} className="focus:outline-none" src={sponsor.image} alt="Adidas" role="img" />
            </div>
            ))
          }
         
        </div>
      </div>
  )
}

export default Sponsor