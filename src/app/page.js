import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-20 py-10">
      <Navbar />
      <Header />      
    </main>
  )
}
