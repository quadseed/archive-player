import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Archive-Player</title>
      </Head>
      <Header />

      <div className='mx-60 my-40 space-y-10'>
        <p className='text-center text-3xl text-indigo-400 hover:underline'><Link href="/watch">Watch Page</Link></p>
        <p className='text-center text-3xl text-indigo-400 hover:underline'><Link href="/channel">Channel List</Link></p>
        <p className='text-center text-3xl text-indigo-400 hover:underline'><Link href="/channel/id-insert-here">Channel Details</Link></p>
      </div>
    </div>
  )
}

export default Home
