import type { NextComponentType } from 'next'
import Image from 'next/image'
import Nav from './nav'



const Header : NextComponentType = () => {
  return (
    <header className="flex flex-wrap items-center justify-between bg-teal-500 p-6 w-full">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
        <Nav />
      </header>
  )
}

export default Header;