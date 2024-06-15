import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <section>
      <div className="grid grid-cols-1 mt-20">
        <div className="place-self-center"> 
        <h1 className="text-white text-5xl mt-5 lg:text-6xl font-extrabold text-center w-full">
              Hello, I'm Ersi
            </h1>
            <p className="text-[#ADB7BE] mt-2 text-lg lg:text-xl text-center w-full">
            I am a Computer Science student at UMaine. I am passionate about everything tech and innovation! Join me in this journey :)
            I am a Computer Science student at UMaine. I am passionate about everything tech and innovation! Join me in this journey
          </p>
          <div className="flex justify-center mt-2 mb-6">
            <button className="px-6 py-3 rounded-full mr-4 bg-[#DB4B6F] hover:bg-slate-200 text-black self ">Connect</button>
          </div>
        </div>

        <div className=" place-self-center lg:mt-0">
          <div className="rounded-full bg-[#DB4B6F] border-white border-2 border-solid w-[350px] h-[350px] relative ">
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
