import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Comments from '../components/watch/Comments';
import Description from '../components/watch/Description';
import Header from '../components/Header'
import ChatReplay from '../components/watch/ChatReplay';
import Player from '../components/watch/Player';
import { testData } from '../components/test';
import VideoStatistics from '../components/watch/VideoStatistics';

type VideoProps = {
  video_id: string,
  title: string,
  thumbnail: string,
  description: string,
  channelName: string,
  channel_id: string,
  view_count: number,
  was_live: boolean,
  like_count: number
}

export const getServerSideProps: GetServerSideProps<VideoProps> = async (context) => {
  const videoId = context.query.v;
  if (videoId) {
    console.log(videoId)
  } else {
    console.log("none")
  }

  const props: VideoProps = {
    video_id: testData.videoId,
    title: testData.title,
    thumbnail: testData.thumbnailUrl,
    description: testData.description,
    channelName: testData.channelName,
    channel_id: testData.channelId,
    view_count: testData.views,
    was_live: false,
    like_count: testData.like
  }

  return { props }
}

const Watch = (props: VideoProps) => {

  return (
    <div>
      <Head>
        <title>{testData.title} - Archive-Player</title>
      </Head>

      <Header />
      <div className='xl:flex items-start'>

        <div className='xl:w-3/4 space-y-5'>
          <Player url={testData.url} thumbnailUrl={testData.thumbnailUrl} />
        </div>

        <div className='sticky top-12'>
          <ChatReplay />
        </div>
      </div>

      <div className='xl:w-3/4 px-10 py-2 lg:px-32 md:py-4'>
            <VideoStatistics />
            <Description />
            <Comments />
          </div>
    </div>
  )
}

export default Watch