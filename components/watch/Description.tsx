import Link from 'next/link'
import React from 'react'
import { testData } from '../test'
import { MultiLineString } from '../Utils'

function Description() {
  return (
    <div className='mx-3 my-4 pb-5 border-b-2 space-y-4'>
      <div className='flex items-center px-2 py-1'>
        <Link href={"/channel/" + testData.channelId}><img className='flex h-14 w-14 rounded-full hover:cursor-pointer' src={testData.icon} /></Link>
        <div className='px-3'>
          <p className='text-sm font-bold hover:underline hover:cursor-pointer'><Link href={"/channel/" + testData.channelId}>{testData.channelName}</Link></p>
          <p className='text-xs'>{testData.subscriber.toLocaleString()} Subscribers</p>
        </div>
      </div>

      <div className='mx-10 pl-9'>
      <MultiLineString body={testData.description} />
      </div>
    </div>
  )
}

export default Description