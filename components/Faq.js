import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const faqContent = [
  {
    question: 'What is CrocoBoys NFT?',
    answer: 'The CrocoBoys NFT is a collection of 3,456 dangerously cute Crocodiles that live on the Solana blockchain.'
  },
  {
    question: 'When is the Mint?',
    answer: 'The Public sale is on 22th January 2022, 11:11AM UTC, with the supply of 3,456 NFTs, Price for the Public Sale is 0.1 SOL'
  },
  {
    question: 'What is an NFT?',
    answer: 'An NFT stands for "Non-fungible token" and is a fancy term for a unique, digital item whose ownership is proven and managed by a blockchain.'
  },
  {
    question: 'How many CrocoBoys NFT\'s will there be ?',
    answer: 'There will be 3,456 unique CrocoBoys NFT\'s.'
  },
  {
    question: 'How many CrocoBoys can you mint per wallet?',
    answer: 'You can mint NFT as much as you want per wallet.'
  },
  {
    question: 'What is the minting price of CrocoBoys NFT?',
    answer: 'Minting price is 0.1 SOL'
  },
  {
    question: 'Are there any royalty fees?',
    answer: 'The royalty fees are fixed at 5%. A portion of those royalties will be used for Marketing to help the BOG community grow. Our team is very committed to the long term success of this project. We are here to stay.'
  }
]

export default function Faq() {
  return (
    <div id="FAQ" className='text-white h-max py-20 text-center px-6'>
      <div className='md:max-w-screen-lg md:mx-auto md:my-10'>
        
      <h3 className='uppercase mb-8 text-5xl px-7 md:mb-10 md:pb-5'>FAQ</h3>
      {
        faqContent.map(el => (
          <div key={el.question}>
            <hr className='opacity-70'/>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`${ open ? 'bg-neutral-900' : 'bg-black'} px-3 flex justify-between w-full py-5 text-2xl font-medium text-left md:px-7 md:py-7`}>
                    <span>{ el.question }</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-7 h-7 pt-1 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className={`${ open ? 'bg-neutral-900' : 'bg-black'} px-3 text-left pt-1 pb-7 text-lg text-white md:px-7 md:pb-8`}>
                  { el.answer }
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))
      }

      </div>
    </div>
  )
}

      