import React, { SetStateAction, useEffect } from 'react'
import { Song } from '@/model/song';

import Row from './Row';

const SongsDisplay = (props: { songs: Song[], onHandleSongClick: (song: Song) => void }) => {

  const sortedSongs = props.songs.sort((a, b) => {
    if (a.rating === b.rating) 
      return b.name.localeCompare(a.name)

    return b.rating - a.rating;
  })

  // const groupedSongs2: JSX.Element[] = props.songs.map((song, id) => {
  //   return <div key={id}>
  //     <h3>song: {song.name}</h3>
  //   </div>
  // })

  const groupedSongs = () => { 
    
    //map thru sorted
    //if rating changes, make new row
    let currRow: Song[] = [];

    if(sortedSongs.length === 0)
      return <></>;
    let currRating = sortedSongs[0].rating;
    let result: JSX.Element[] = []

    console.log(sortedSongs);
    sortedSongs.map((song, id) => {
      if(song.rating === currRating) {
        currRow = [...currRow, song];
      }

      else {
        result = [...result, <Row currRating= {currRating} row={currRow} onHandleSongClick={props.onHandleSongClick}/>];
        currRating = song.rating;
        currRow = [song]; //reset rows
      }
    })

    result = [...result, <Row currRating= {currRating} row={currRow} onHandleSongClick={props.onHandleSongClick}/>];
    return result;

  }


  return (
    <div className='flex-1 border border-yellow-700 p-5'>
      <h1>Song Display</h1>
      {groupedSongs()}
      
    </div>
  )
}

export default SongsDisplay