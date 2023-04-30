import Image from 'next/image'
import { Inter } from 'next/font/google'
import { invoke } from '@tauri-apps/api/tauri'
import { SetStateAction, useEffect } from 'react';
import { Song } from '@/model/song';
import { useState } from 'react';
import dynamic from 'next/dynamic'

const SongsDisplay = dynamic(() => import('../components/CenterColumn/SongsDisplay'), { ssr: false })
const LeftColumn = dynamic(() => import('../components/LeftColumn/LeftColumn'), { ssr: false })
const RightColumn = dynamic(() => import('../components/RightColumn/RightColumn'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    invoke('init')
    .then(console.log)
    .catch(console.error)

    console.log("fetching jon");
    fetchSongs("jon");
  }, []);
  
  //user is useState that updates whenever user changes
  //fetch new data whenever user is updated
  //filter current data if filter changes

  const [songs, setSongs] = useState<Song[]>([]);

  const fetchSongs = async (name: string) => {

    await invoke("read_songs", {name: name}).then((t) => setSongs(t as SetStateAction<Song[]>))
  
  }

  return (
    <main>
      <h1>Music Ranker</h1>
      <div className='flex'>
        <LeftColumn songs={songs}/>
        <SongsDisplay songs={songs}/>
        <RightColumn/>
      </div>

    </main>
  )
}
