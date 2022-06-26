import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function Header() {
  return (
    <div className='sticky top-0 z-10 flex bg-white shadow-md sm:px-14 md:px-32 xl:px-96 py-3 md:space-x-5 ld:space-x-20'>
      <div className='flex items-center font-bold sm:text-base md:text-xl underline text-indigo-500 pr-3'>
      <Link href="/">Archive-Player</Link>
      </div>
      <form className='flex flex-1 items-center space-x-2 border rounded-full pl-4 py-1 bg-gray-100'>
        <SearchIcon className='pl-1 m-1 h-5 w-5 text-gray-400' />
        <input className='flex-1 bg-transparent outline-none' type="text" placeholder="Search"></input>
        <button type="submit" hidden></button>
      </form>
    </div>
  )
}

export default Header