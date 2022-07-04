import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { GetServerSideProps } from 'next'
import { testData } from '../../components/test'
import Header from '../../components/Header'
import { AdjustmentsIcon } from '@heroicons/react/outline'

type PathParams = {
  id: string;
}

type PageProps = {
  channelId: string
  channelName: string;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const { id } = context.params as PathParams
  const props: PageProps = {
    channelId: id,
    channelName: testData.channelName,
  }
  return { props }
}

const ChannelPage: React.FC<PageProps> = ({ channelId, channelName }: PageProps) => {
  return (
    <div>
      <Head>
      <title>{channelName} - Archive-Player</title>
      </Head>
      <div>
        <Header />

        <div className='flex items-center px-2 py-5 my-15 justify-center border-b-2 shadow-sm'>
          <img className='flex h-20 w-20 rounded-full hover:cursor-pointer' src={testData.icon} />
          <div className='px-3'>
            <p className='text-xl font-bold'>{testData.channelName}</p>
            <p className='text-lg'>{testData.subscriber}</p>
            <p>{channelId}</p>
          </div>
        </div>

        <div className='sm:mx-8 md:mx-11 xl:mx-20 2xl:mx-28'>
          <div className='flex items-center mx-5 my-5'>
          <p className='flex items-center px-4 space-x-2 select-none hover:cursor-pointer active:bg-slate-200 active:rounded-full'><AdjustmentsIcon className='h-6 w-6 text-gray-500' />Sort</p>
          </div>
          
          <div className='mx-5 grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-8'>

            {testData.items.map((item) => (
              <div className='mx-4 my-2 hover:cursor-pointer select-none'>
                <Link href={"/watch?v=" + item.videoId}>
                  <div className='mb-2'>
                    <div className='mb-2 relative'>
                      <img className='h-auto w-auto justify-center' src={item.thumbnailUrl} />
                      <p className='absolute bottom-0 right-0 bg-gray-700 text-white px-1'>{item.duration}</p>
                    </div>
                    
                    <div>
                      <p className='line-clamp-2' key={item.videoId}> {item.title}</p>
                      <div className='flex text-sm space-x-2 text-gray-500'>
                        <p>{item.views.toLocaleString()} views</p>
                        <p>{item.published}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}
export default ChannelPage