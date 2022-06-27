import Link from 'next/link'
import { AdjustmentsIcon } from '@heroicons/react/outline'
import React from 'react'
import { testData } from '../test'
import { MultiLineString } from '../Utils'

function Comments() {
  
  return (
    <div>
      <div className='flex items-center mx-3 my-4 space-x-2 p-1'>
        <p>{testData.comments.length.toLocaleString()} Comments</p>
        <p className='flex items-center px-4 space-x-2 select-none hover:cursor-pointer active:bg-slate-200 active:rounded-full'><AdjustmentsIcon className='h-6 w-6 text-gray-500' />Sort</p>
      </div>

      {testData.comments.map((item) => (
      <div>
        <div className='flex items-center px-2 py-1 space-y-4'>
          <Link href={"/channel/" + item.author_id}><img className='h-10 w-10 rounded-full hover:cursor-pointer' src={item.author_thumbnail} /></Link>
          <div className='items-center space-y-1 pl-1'>
            <div className='flex items-center space-x-1 px-3'>
              <p className='text-sm font-bold hover:underline hover:cursor-pointer'><Link href={"/channel/" + item.author_id}>{item.author}</Link></p>
              <p className='text-xs'>{item.time_text}</p>
            </div>

            <div className='text-sm pl-3'>
              <MultiLineString body={item.text} />
            </div>
          </div>
          
          
        </div>


      </div>
      ))}
    </div>
  )
}

export default Comments