import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Connect from './components/Connect'
import Experience from './components/Experience'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-20 py-10">
      <Navbar />
      <div className=''>
      <Header />  
      <About /> 
      <Projects/>  
      <Experience /> 
      <Connect />
      </div> 
    </main>
  )
}
