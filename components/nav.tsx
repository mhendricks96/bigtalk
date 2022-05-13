import type { NextComponentType } from 'next'
import Dropdown from './dropdown'

const Nav: NextComponentType = () => {
  return (
    <nav>
      {/* <div className="mr-6 flex flex-shrink-0 items-center text-white">
        
      </div> */}
      <Dropdown />

      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center all:hidden">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block md:inline-block sm:inline-block hidden"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block md:inline-block sm:inline-block hidden"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block md:inline-block sm:inline-block hidden"
          >
            Blog
          </a>
        </div>
        
      </div>
    </nav>
  )
}

export default Nav
