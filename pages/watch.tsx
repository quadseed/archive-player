import type { NextPage } from 'next'
import Head from 'next/head';
import Comments from '../components/Comments';
import Description from '../components/Description';
import Header from '../components/Header'
import LiveChat from '../components/LiveChat';
import Player from '../components/Player';
import { testData } from '../components/test';
import VideoStatistics from '../components/VideoStatistics';


const Watch: NextPage = () => {

  return (
    <div>
      <Head>
        <title>{testData.title} - Archive-Player</title>
      </Head>

      <Header />
      <div className='grid md:grid-cols-4 sm:grid-cols-1 h-screen'>

        <div className='md:col-span-3 space-y-5'>
          <Player url={testData.url} thumbnailUrl={testData.thumbnailUrl} />
          <div className='py-4 px-32'>
            <VideoStatistics />
            <Description />
            <Comments />
          </div>
        </div>

        <LiveChat />
      </div>
    </div>
  )
}

export default Watch