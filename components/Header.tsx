import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <div className='sticky top-0 flex bg-white shadow-sm px-96 py-3'>
      <form className='flex flex-1 items-center space-x-2 border rounded-full py-1 bg-gray-100'>
        <SearchIcon className='pl-1 m-1 h-5 w-5 text-gray-400' />
        <input className='flex-1 bg-transparent outline-none' type="text" placeholder="Search"></input>
        <button type="submit" hidden></button>
      </form>
    </div>
  )
}

export default Header