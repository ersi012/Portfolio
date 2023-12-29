import Image from 'next/image'
import headerSection from './components/headerSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <headerSection />      
    </main>
  )
}
