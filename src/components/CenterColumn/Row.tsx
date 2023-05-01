import React from 'react'
import { Song } from '@/model/song'
import Cell from './Cell'


const Row = (props: {currRating: number, row: Song[], onHandleSongClick: (song: Song) => void}) => {

  const elements = props.row.map((song) => {
    return(
      <Cell song={song} onHandleSongClick={props.onHandleSongClick}/>
    )
  })

  return (
    <div className='flex flex-row'>
      <p className='w-10 border border-cyan-500'>{props.currRating}</p>
      {elements}
    </div>

  )
}

export default Row