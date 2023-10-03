import { Play } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='section overflow-x-hidden'>
      <div className='container mx-auto h-full flex justify-center items-center'>
        <div className='m-20'>
          <h1 className='h1'>Tiago Graunke</h1>
          <h2 className='h2'>Cacoal - RO</h2>
          <button className='btn'>VER PORTFÓLIO</button>
        </div>
        <img src="videomaker1.png" className='w-[40%]' alt="" />
        <h1 className='h2 uppercase self-end mb-20 text-[#dc862f] drop-shadow-glow'><b>video</b> <br /> maker_</h1>
      </div>

      
    </section>
  )
}
