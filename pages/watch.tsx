import type { NextPage } from 'next'
import Comments from '../components/Comments';
import Description from '../components/Description';
import Header from '../components/Header'
import Player from '../components/Player';
import { testData } from '../components/test';
import VideoStatistics from '../components/VideoStatistics';


const Watch: NextPage = () => {

  return (
    <div>
      <Header />
      <div className='grid grid-cols-4 h-screen'>

        <div className='col-span-3 space-y-5'>
          <Player url={testData.url} thumbnailUrl={testData.thumbnailUrl} />
          <div className='py-4 px-32'>
            <VideoStatistics />
            <Description />
            <Comments />
          </div>
        </div>

        <div className='flex col-span-1'>
          hogehoge
        </div>
      </div>
    </div>
  )
}

export default Watch