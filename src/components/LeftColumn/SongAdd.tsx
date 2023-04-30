import { Song } from '@/model/song';
import { invoke } from '@tauri-apps/api';
import React, { useState } from 'react'

const SongAdd = (props: { songs: Song[] }) => {

  const [inputs, setInputs] = useState({
    name: '',
    artist: '',
    album: '',
    genre: '',
    language: '',
    instrumental: false,
    lyrics: '',
    rating: 0
  })
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSong: Song = {
      name: inputs.name,
      artist: inputs.artist,
      album: inputs.album,
      genre: inputs.genre,
      language: inputs.language,
      instrumental: inputs.instrumental,
      lyrics: inputs.lyrics,
      rating: +inputs.rating
    }
    const newSongs = [...props.songs, newSong]
    postSong(newSongs, "jon")
  
  }

  const postSong = async (songs: Song[], uploader: string) => {

    await invoke("write_songs", {songs: songs, uploader: uploader}).then((e) => console.log("added: " + e)).catch((e) => console.log("can't add: " + e));
  
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
      <label className=''>Song name:
      <input 
        type="text" 
        name="name"
        onChange={handleChange}
        className="bg-gray-600"
      />
      </label>
      <br></br>
      
      <label>Main Artist:
      <input 
        type="text" 
        name="artist"
        onChange={handleChange}
        className="bg-gray-600"
      />
      </label>
      <br></br>
      
      <label>Album:
      <input 
        type="text" 
        name="album"
        onChange={handleChange}
        className="bg-gray-600"
      />
      </label>
      <br></br>
      
      <label>Main Genre:
      <input 
        type="text" 
        name="genre"
        onChange={handleChange}
        className="bg-gray-600"
      />
      </label>
      <br></br>

      <label>Language:
      <input 
        type="text" 
        name="language"
        onChange={handleChange}
        className="bg-gray-600"
      />
      </label>
      <br></br>
      
      <label>Instrumental:
      <input 
        type="checkbox" 
        name="instrumental"
        onChange={handleChange}
        className="bg-gray-600"
      />
      </label>
      <br></br>
      
      <label>Lyrics:
      <input 
        type="text" 
        name="lyrics"
        onChange={handleChange}
        className="bg-gray-600"
      />
      </label>
      <br></br>
      
      
      <label>Rating (0-20):
        <input 
          type="number" 
          name="rating" 
          onChange={handleChange}
          className="bg-gray-600"
        />
        </label>
        <br></br>
        <input type="submit" className='border items-center'/>
    </form>
  )
}

export default SongAdd