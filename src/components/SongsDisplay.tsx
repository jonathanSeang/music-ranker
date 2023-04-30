import React, { SetStateAction, useEffect } from 'react'
import { Song } from '@/model/song';
import { useState } from 'react';
import { invoke } from '@tauri-apps/api';
import Row from './SongTable/Row';

const SongsDisplay = () => {

  const [songs, setSongs] = useState<Song[]>([]);

  const fetchSongs = async (name: string) => {

    await invoke("read_songs", {name: name}).then((t) => setSongs(t as SetStateAction<Song[]>))
  
  }

  useEffect(() => {
    console.log("fetching jon");
    fetchSongs("jon");
  }, [])

  const parsedSongs = songs.map((song, id) => {
    return <div key={id}>
      <h3>song: {song.name}</h3>
    </div>
  })

  return (
    <>
      <h1>Song Display</h1>
      {parsedSongs} 
      
    </>
  )
}

export default SongsDisplay