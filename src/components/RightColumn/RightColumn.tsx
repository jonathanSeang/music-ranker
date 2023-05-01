import React from 'react'
import SongAbout from './SongAbout'
import { Song } from '@/model/song'

const RightColumn = (props: {activeSong: Song}) => {
  return (
    <div className='flex-2 border border-red-700 p-5 min-w-[20%]'>
        <SongAbout activeSong={props.activeSong}/>
    </div>
  )
}

export default RightColumn