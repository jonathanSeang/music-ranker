import React from 'react'
import SongAdd from './SongAdd'
import SongsFilter from './SongsFilter'
import { Song } from '@/model/song';

const LeftColumn = (props: { songs: Song[] }) => {
  return (
    <div className='flex-2 border border-lime-600 min-w-[15%]'>
        <SongAdd songs={props.songs}/>
        <SongsFilter/>
    </div>
  )
}

export default LeftColumn