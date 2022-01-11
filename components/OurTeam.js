import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Image from 'next/image'

export default function OurTeam() {
  return (
    <div id="OurTeam" className='text-white h-max pt-14 md:pb-2 text-center px-6'>
      <div className='md:min-h-10'></div>
      <div className='md:max-w-screen-lg md:mx-auto md:my-10'>
        
        <h3 className='uppercase mb-8 text-5xl px-7 md:mb-10 md:pb-5'>Our Team</h3>
        <div className='md:flex md:justify-around'>
          <div className='text-center pb-8 md:pb-3 md:hover:bg-neutral-900 md:px-4 md:py-4'>
            <Image
              src="/images/146.png"
              alt="founder avatar"
              width={200}
              height={200}
            />
            <div className='md:py-3'>
              <p className='text-3xl'>Novaeguineae</p>
              <p>FOUNDER &amp; INVESTOR</p>
            </div>
          </div>
          <div className='text-center pb-8 md:pb-3 md:hover:bg-neutral-900 md:px-4 md:py-4'>
            <Image
              src="/images/108.png"
              alt="founder avatar"
              width={200}
              height={200}
            />
            <div className='md:py-3'>
              <p className='text-3xl'>Rhombifer</p>
              <p>COMMUNITY AND MARKETING</p>
            </div>
          </div>
          <div className='text-center pb-8 md:pb-3 md:hover:bg-neutral-900 md:px-4 md:py-4'>
            <Image
              src="/images/21.png"
              alt="founder avatar"
              width={200}
              height={200}
            />
            <div className='md:py-3'>
              <p className='text-3xl'>Mindorensis</p>
              <p>ART DIRECTOR</p>
            </div>
          </div>
          <div className='text-center pb-8 md:pb-3 md:hover:bg-neutral-900 md:px-4 md:py-4'>
            <Image
              src="/images/39.png"
              alt="founder avatar"
              width={200}
              height={200}
            />
            <div className='md:py-3'>
              <p className='text-3xl'>Niloticus</p>
              <p>DEVELOPER</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

      