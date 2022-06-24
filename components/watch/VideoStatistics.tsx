import React from 'react'
import { testData } from '../test'
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';
import IconBuilder from '../Utils';

function VideoStatistics() {

  const like =`${testData.like} Likes`;
  const dislike =`${testData.dislike} Dislikes`;
  
  return (
    <div className='border-b-2'>
      <div className='flex items-center m-1 text-sm md:text-xl font-base'>{testData.title}</div>
      <div className='flex space-x-20 md:space-x-60 space-y-1'>

        <div className='flex items-center space-x-5 my-1'>
          <p>{testData.views.toLocaleString()} views</p>
          <p>published at {testData.date}</p>
        </div>

        <div className='flex pl-10 2xl:pl-96 space-x-5 space-y-1'>
            <div className='text-green-600'>
            <IconBuilder Icon={ThumbUpIcon} title={like} />
            </div>
            <div className='text-red-500'>
            <IconBuilder Icon={ThumbDownIcon} title={dislike} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default VideoStatistics