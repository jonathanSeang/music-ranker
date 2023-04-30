import React, { SetStateAction, useEffect } from 'react'
import { Song } from '@/model/song';

import Row from './Row';

const SongsDisplay = (props: { songs: Song[] }) => {

  const parsedSongs = props.songs.map((song, id) => {
    return <div key={id}>
      <h3>song: {song.name}</h3>
    </div>
  })

  return (
    <div className='flex-1 border border-yellow-700'>
      <h1>Song Display</h1>
      {parsedSongs} 
      
    </div>
  )
}

export default SongsDisplay