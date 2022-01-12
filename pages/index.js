import Head from 'next/head'
import BigButton from '../components/BigButton'
import OurTeam from '../components/OurTeam'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CrocoBoys NFT</title>
        <meta name="description" content="Collect unique croco limited 3,456 artworks on Solana Blockchain with highest rarity on each pictures of croco on chain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='font-VT323'>
        <div className="bg-orange-400 h-screen">
          <header id="Join">
            <div className='flex justify-center py-4'>
              <img
                className="my-3 cursor-pointer"
                src="/images/crocoboys-logo.png"
                width={240}
                height={38}
                />
            </div>
            <div className='text-center text-white py-14 md:max-5xl'>
              <h2 className='text-5xl md:text-8xl mx-4 py-4 mt-8 md:max-w-5xl md:mx-auto md:pt-9 md:leading-none'>
                TAKE A HIT, LET'S MAKE SOME NOISE ON NFT WORLD
              </h2>
              <h5 className='text-2xl mx-3 pb-8 opacity-80 py-4 md:text-4xl md:max-w-4xl md:mx-auto md:py-2 md:mb-14 md:pb-3'>
                Collect unique croco limited 3,456 artworks on Solana Blockchain with highest rarity on each pictures of croco on chain. <span className='underline'>Public sale is on 22th January 2022, 11:11AM UTC.</span>
              </h5>
              <BigButton text="Mint Now" color="green" to="https://mint.crocoboys.com" openNewTab={false}/>
            </div>
          </header>
        </div>
        <div id="About" className='bg-green-700 text-white h-max py-16 text-center'>
          <h6 className='text-3xl uppercase mb-3'>About</h6>
          <h3 className='capitalize text-5xl px-7'>Welcome To The CrocoBoys Club</h3>
          <h5 className='text-2xl pb-8 opacity-70 my-2 pl-7 pr-10 py-4 md:max-w-screen-lg md:mx-auto'>CrocoBoys NFT's is a collection of 3,456 Crocodiles. Each Croco is unique and no two are exactly alike. The combination of a Crocodiles aesthetics was randomly generated from over 100 pixel hand-drawn traits.
          </h5>
        </div>
        <div className='bg-bg-artworks pt-12 md:pt-56 bg-no-repeat bg-black bg-contain'>
          <OurTeam/>
          <Faq/>
        </div>
        <Footer/>
      </main>
    </div>
  )
}
