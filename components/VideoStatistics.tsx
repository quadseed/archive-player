import React from 'react'
import { testData } from './test'
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';
import IconBuilder from './IconBuilder';

function VideoStatistics() {

  const like =`${testData.like} Likes`;
  const dislike =`${testData.dislike} Dislikes`;
  
  return (
    <div className='border-b-2'>
      <div className='flex items-center m-1 text-xl font-base'>{testData.title}</div>
      <div className='flex space-x-20'>

        <div className='flex space-x-5 my-2'>
          <p>{testData.views.toLocaleString()} views</p>
          <p>published at {testData.date}</p>

        
          <div className='flex pl-20 items-center space-x-5 space-y-1'>

          <IconBuilder Icon={ThumbUpIcon} title={like} />
          <IconBuilder Icon={ThumbDownIcon} title={dislike} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default VideoStatistics