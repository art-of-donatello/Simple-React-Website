import React from 'react';

const Banner = () => {
  return (
    <section id="banner" className="container mx-auto bg-cyan-900 text-gray-600 body-font  ">
    <div className=" px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
      <div className="xl:w-1/4 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className="title-font font-medium text-3xl text-gray-900 text-center">
        Design-Code-Realase<br/>  
           with 	&#10084;

          </h1>
        <p className="leading-relaxed mt-4 text-center">Developing E-commerce Softwares Crm Softwares </p>
      </div>
      <div className=" xl:w-1/4   rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Contact Me</h2>
        <div className="relative mb-4">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
          <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SEND</button>
        <p className="text-xs text-gray-500 mt-3">Literally you probably havent heard of them jean shorts.</p>
      </div>
    </div>
    <div className="svgdiv relative mx-0 px-0 ">
    <div className="shape  overflow-hidden   text-white dark:text-slate-900">
      
    
      <svg  viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor">
          </path>
          </svg>
          </div>
          </div>
  </section>
  )
}

export default Banner;