import Image from 'next/image'
import { Inter } from 'next/font/google'
import { invoke } from '@tauri-apps/api/tauri'
import { useEffect } from 'react';

import dynamic from 'next/dynamic'

const SongsDisplay = dynamic(() => import('../components/SongsDisplay'), { ssr: false })
const SongAdd = dynamic(() => import('../components/SongAdd'), { ssr: false })
const SongsFilter = dynamic(() => import('../components/SongsFilter'), { ssr: false })
const SongAbout = dynamic(() => import('../components/SongAbout'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    invoke('init')
    .then(console.log)
    .catch(console.error)
  }, []);
  
  //user is useState that updates whenever user changes
  //fetch new data whenever user is updated
  //filter current data if filter changes

  return (
    <main>
      <h1>Music Ranker</h1>

      <SongAdd />
      <SongsFilter />
      <SongsDisplay />
      <SongAbout />

    </main>
  )
}
