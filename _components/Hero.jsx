import React from 'react'

function Hero() {
  return (
  
<section
  className="relative bg-[url(/bg5.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
   <div className=''>
   <h1 className="text-3xl font-extrabold sm:text-5xl text-emerald-400">
        Let us find your

        <strong className="block font-extrabold text-emerald-400"> Forever Home. </strong>
      </h1>
   </div>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-blue-300 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-emerald-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-300 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-emerald-400 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
