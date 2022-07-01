import Link from 'next/link'
import { AdjustmentsIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
import React from 'react'
import { testData } from '../test'
import IconBuilder, { MultiLineString } from '../Utils'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

function Comments() {

  dayjs.extend(relativeTime)
  
  return (
    <div>
      <div className='flex items-center mx-3 my-4 space-x-2 p-1'>
        <p>{testData.comments.length.toLocaleString()} Comments</p>
        <p className='flex items-center px-4 space-x-2 select-none hover:cursor-pointer active:bg-slate-200 active:rounded-full'><AdjustmentsIcon className='h-6 w-6 text-gray-500' />Sort</p>
      </div>

      {testData.comments.map((item) => (
      <div key={item.id}>
        <div className='flex px-2 py-1 ml-2 mb-4'>
          <Link href={"/channel/" + item.author_id}><img className='h-10 w-10 rounded-full hover:cursor-pointer' src={item.author_thumbnail} /></Link>
          <div className='items-center space-y-1 pl-1'>
            <div className='flex items-center space-x-1 px-3'>
              <p className={'text-sm font-bold hover:underline hover:cursor-pointer ' + (item.author_is_uploader ? 'bg-gray-500 rounded-xl px-2 text-gray-50' : '')}><Link href={"/channel/" + item.author_id}>{item.author}</Link></p>
              <p className='text-xs'>{dayjs.unix(item.timestamp).fromNow()}</p>
            </div>

            <div className='text-sm pl-3'>
              <MultiLineString body={item.text} />
            </div>

            <div className='flex items-center space-x-2 pl-2 pt-1 select-none'>
              <div className='text-gray-500'>
                <IconBuilder Icon={ThumbUpIcon} title={(item as any).like_count ?? "Like"}/>
              </div>
              {item.is_favorited && (
                <div className='relative hover:cursor-pointer rounded-full active:bg-slate-200'>
                  <img className='h-4 w-4' src={testData.icon} />
                  <HeartIcon className='absolute top-2 left-2 h-3 w-3 text-red-500' />
                </div>
              )}
            </div>
          </div>
          
          
        </div>


      </div>
      ))}
    </div>
  )
}

export default Comments