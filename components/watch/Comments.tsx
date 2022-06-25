import { AdjustmentsIcon } from '@heroicons/react/outline'
import React from 'react'
import { testData } from '../test'

function Comments() {
  return (
    <div>
      <div className='flex items-center mx-3 my-4 pb-3 space-x-2 p-1'>
        <p>{testData.commentCount.toLocaleString()} Comments</p>
        <p className='flex items-center px-4 space-x-2 select-none hover:cursor-pointer active:bg-slate-200 active:rounded-full'><AdjustmentsIcon className='h-6 w-6 text-gray-500' />Sort</p>
      </div>
      <div>
        hogehoge
      </div>
    </div>
  )
}

export default Comments