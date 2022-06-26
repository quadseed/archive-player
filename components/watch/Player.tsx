import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type Links = {
    url: string,
    thumbnailUrl: string
}

function Player({url, thumbnailUrl}: Links) {
  return (
    <div className='group relative mx-2 my-1 md:mx-16 md:my-8'>
          <ReactPlayer 
            width="100%"
            height="100%"
            url={url}
            controls
            playing
            playsinline={true}
            volume={0.04}
            playbackRate={1}
          />
          <div className='absolute bottom-0 bg-black text-white hidden group-hover:block transition ease-in-out duration-700'>Controller Components</div>
    </div>
  )
}

export default Player