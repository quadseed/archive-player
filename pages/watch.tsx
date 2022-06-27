import type { NextPage } from 'next'
import Head from 'next/head';
import Comments from '../components/watch/Comments';
import Description from '../components/watch/Description';
import Header from '../components/Header'
import ChatReplay from '../components/watch/ChatReplay';
import Player from '../components/watch/Player';
import { testData } from '../components/test';
import VideoStatistics from '../components/watch/VideoStatistics';


const Watch: NextPage = () => {

  return (
    <div>
      <Head>
        <title>{testData.title} - Archive-Player</title>
      </Head>

      <Header />
      <div className='xl:flex items-start'>

        <div className='xl:w-3/4 space-y-5'>
          <Player url={testData.url} thumbnailUrl={testData.thumbnailUrl} />
          <div className='px-10 py-2 md:px-32 md:py-4'>
            <VideoStatistics />
            <Description />
            <Comments />
          </div>
        </div>

        <div className='sticky top-12'>
          <ChatReplay />
        </div>
      </div>
    </div>
  )
}

export default Watch