import { Song } from '@/model/song'
import React from 'react'

const Cell = (props: {song: Song, onHandleSongClick: (song: Song) => void}) => {

  const handleClick = () => {
    props.onHandleSongClick(props.song);
  }

  return (
    <div className='border flex-auto text-center max-w-xs'
    onClick={handleClick}>
      <h2>
        {props.song.name}
      </h2>
      <h3>
        {props.song.artist}
      </h3>
    </div>
  )
}

export default Cell