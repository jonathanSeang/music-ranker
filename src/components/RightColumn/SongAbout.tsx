import { Song } from '@/model/song'
import React from 'react'

const SongAbout = (props: {activeSong: Song}) => {
  return (
    <div>
      <h1>SongAbout</h1>
      <p>Name: {props.activeSong.name}</p>
      <p>Artist: {props.activeSong.artist}</p>
      <p>Album: {props.activeSong.album}</p>
      <p>Genre: {props.activeSong.genre}</p>
      <p>Language: {props.activeSong.language}</p>
      <p>Instrumental: {props.activeSong.instrumental}</p>
      <p>Lyrics: {props.activeSong.lyrics}</p>
      <p>Rating: {props.activeSong.rating}</p>
    </div>
  )
}

export default SongAbout