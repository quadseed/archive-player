import React from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type Links = {
    url: string,
    thumbnailUrl: string
}

function Player({url, thumbnailUrl}: Links) {
  return (
    <div className='mx-24 my-8'>
          <ReactPlayer 
            width="100%"
            height="auto"
            url={url}
            controls
            volume={0.02}
            playbackRate={1}
          />
    </div>
  )
}

export default Player