import BigButton from '../components/BigButton'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-white h-max py-7 px-4'>
      <div className='md:flex md:justify-around md:max-w-screen-xl xl:max-w-screen-2xl xl:px-14 md:mx-auto md:py-5'>
        <div className='text-center mt-4 md:text-left md:py-10 xl:pl-5'>
          <h4 className='text-4xl md:text-5xl'>Stay Informed</h4>
          <p className='text-xl mt-3 mb-10 opacity-70 md:text-2xl md:py-4'>Join the community and keep up-to-date with our development process.</p>
          <BigButton to="https://discord.gg/32c32S8Pdv" text="Join Discord" color="yellow" textColor="black" openNewTab={true} />
        </div>
        <div className='text-center mt-14 md:text-left'>
          <h4 className='mb-3 text-4xl md:text-5xl'>CrocoBoys</h4>
          <div className="text-xl justify-center opacity-70 md:text-2xl md:py-3">
            <Link href="#Join">
              <a className='hover:text-orange-600'>
                Join Us
              </a>
            </Link>
            <br />
            <Link href="https://drive.google.com/drive/folders/1Zvi9evGCenjpy9Bcb9fV_-U2k_FoWvps?usp=sharing">
              <a target="_blank" className='hover:text-orange-600'>
                Press Kit
              </a>
            </Link>
            <br />
            <Link href="#About">
              <a className='hover:text-orange-600'>
                About
              </a>
            </Link>
            <br />
            <Link href="#OurTeam">
              <a className='hover:text-orange-600'>
                Our Teams
              </a>
            </Link>
            <br />
            <Link href="#FAQ">
              <a className='hover:text-orange-600'>
                FAQ
              </a>
            </Link>
          </div>
        </div>
        <div className='text-center mt-14 md:text-left'>
          <h4 className='mb-3 text-4xl md:text-5xl'>Community</h4>
          <div className="text-xl justify-center opacity-70 md:text-2xl md:py-3">
            <Link href="https://twitter.com/crocoboysnft">
              <a target="_blank" className='hover:text-orange-600'>
                Twitter
              </a>
            </Link>
            <br />
            <Link href="https://discord.gg/32c32S8Pdv">
              <a target="_blank" className='hover:text-orange-600'>Discord
              </a>
            </Link>
            <br />
            <Link href="https://www.instagram.com/crocoboysnft">
              <a target="_blank" className='hover:text-orange-600'>Instagram
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-8 px-3 text-center md:text-left md:max-w-screen-xl xl:max-w-screen-xl md:mx-auto'>
        <hr />
        <p className='mt-5 text-base opacity-70 md:text-xl'>&copy; 2022 CrocoBoys. All rights reserved.</p>
      </div>
    </footer>
  )
}