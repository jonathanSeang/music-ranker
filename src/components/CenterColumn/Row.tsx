import React from 'react'
import { Song } from '@/model/song'


const Row = (props: {row: Song[]}) => {

  const elements = props.row.map((song) => {
    return(
      <div>{song.name} and {song.rating}</div>
    )
  })

  return (
    <div>
      {elements}
    </div>

  )
}

export default Row