import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type Links = {
    url: string,
    thumbnailUrl: string
}

function Player({url, thumbnailUrl}: Links) {
  return (
    <div className='mx-16 my-8'>
          <ReactPlayer 
            width="100%"
            height="100%"
            url={url}
            controls
            playing
            volume={0.04}
            playbackRate={1}
          />
    </div>
  )
}

export default Player