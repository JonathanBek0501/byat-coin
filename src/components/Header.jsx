import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navigations = [
  {
    link: '/',
    title: 'How to buy',
  },
  {
    link: '/',
    title: 'About us',
  },
  {
    link: '/',
    title: 'Roadmap',
  },
  {
    link: '/',
    title: 'Featured',
  },
  {
    link: '/',
    title: 'Tokenomics',
  }
]

const Header = () => {
  return (
    <header>
      <div className='md:fixed top-0 left-0 w-full bg-primary/50 backdrop-blur-lg px-7 md:px-12 py-8 md:py-3 z-10'>
        <div className='max-w-base mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-16'>
          <div className='flex items-center gap-4'>
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt="Logo of the project"
              className='w-12 md:w-full h-12 md:h-full'
            />
            <span className='md:hidden text-2xl uppercase text-primary-lighter font-black'>
              $BYAT
            </span>
          </div>

          <div className='flex items-center gap-x-6 gap-y-1 flex-wrap justify-center md:justify-end'>
            {navigations.map((item,idx)=> (
              <Link key={idx} href={item.link} className='text-3xl font-medium text-white uppercase hover:underline'>
                {item.title}
              </Link>
            ))}
            <Link href="https://jup.ag/swap/SOL-BYAT_BYATmZ7ry2pewxW3213sczJYB7ZJzPr921uvcRcJYYZQ" target='_blank' className='bg-primary-lighter text-3xl font-medium text-primary uppercase rounded-full hover:scale-105 transition-all ease-in-out px-5 py-1'>
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header