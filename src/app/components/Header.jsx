import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-20 ">
        <div className="col-span-8 place-self-center"> 
          <h1 className="text-white text-5xl lg:text-6xl font-extrabold">Hello, I'm Ersi</h1>
          <p className="text-[#ADB7BE] mt-2 mb-6 text-lg lg:text-xl"> 
            hELLO MY NAME IS ERSI & I AM A CS STUDENT 
            blah blahhhh
            helpoigjodsjg kjgkjg  
          </p>
          <div> 
            <button className="px-6 py-3 rounded-full mr-4  bg-[#DB4B6F] hover:bg-slate-200 text-black ">Connect</button>
          </div>
        </div>

        <div className="col-span-4 place-self-center mt-5 lg:mt-0">
          <div className="rounded-full bg-[#DB4B6F] w-[350px] h-[350px] relative">
            <Image
              src="/images/Avatar.png"
              alt="Avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
