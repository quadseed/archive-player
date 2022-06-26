import type { NextPage } from 'next'
import Head from 'next/head';
import Header from '../../components/Header';
import { testData } from '../../components/test';


const Index: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Channel List - Archive-Player</title>
      </Head>
      
      <Header />
      
      <div className='items-center px-2 py-5 justify-center'>
          {testData.channelList.map((item) => (
            <div className='flex my-10 items-center justify-center space-y-2 sm:mx-2 md:mx-24 lg:mx-44 xl:mx-80 2xl:mx-96'>
              <img className='flex rounded-full hover:cursor-pointer h-14 w-14 md:h-20 md:w-20' src={item.icon} />
              <div className='px-3'>
                <p className='text-xl font-semibold md:font-bold hover:cursor-pointer'>{item.channelName}</p>
                <p className='text-sm md:text-lg'>{item.subscriber}</p>
                <p className='line-clamp-1 text-gray-500 text-xs md:text-sm my-1' >{item.description}</p>
              </div>
            </div>

          ))}
          
        </div>
    </div>
  )
}

export default Index