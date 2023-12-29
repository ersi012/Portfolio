import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-20 py-10">
      <Header />      
    </main>
  )
}
