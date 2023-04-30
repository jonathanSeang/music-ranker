use serde_json;

use std::{fs, path};

use std::fs::File;
use std::io::prelude::*;
use std::path::Path;

use crate::model::song::Song;

#[tauri::command]
pub fn init() {
    let ex_song = Song {
        name: String::from("The Garden"),
        artist: String::from("The Family Crest"),
        album: String::from("The War: Act II"),
        genre: String::from("Orchestra"),
        language: String::from("English"),
        lyrics: String::from("There's a garden..."),
        rating: 18
    };
    write_song(ex_song, "jon");
}

//WRITE---------------------------------------------------

//write song to file 
#[tauri::command]
pub fn write_song(song: Song, uploader: &str) {

   let serialized_song = serde_json::to_string(&song).unwrap();
   write_file(&uploader, &serialized_song);

}

//opens file in write-only mode. If file exists, old content destroyed, else new file created
fn write_file(name: &str, data: &str) {

    // let full_path = PathBuf::from("/data/").join(name);
    let path_name = format!("data/{}.txt", name);
    let path = Path::new(&path_name);
    let display = path.display();
 
    // Open a file in write-only mode, returns `io::Result<File>`
    let mut file = match File::create(&path) {
        Err(why) => panic!("couldn't create {}: {}", display, why),
        Ok(file) => file,
    };
 
    // Write the `LOREM_IPSUM` string to `file`, returns `io::Result<()>`
    match file.write_all(data.as_bytes()) {
        Err(why) => panic!("couldn't write to {}: {}", display, why),
        Ok(_) => println!("successfully wrote to {}", display),
    }

}



//READ---------------------------------------------------

//read all songs from given uploader
#[tauri::command]
pub fn read_songs(uploader: &str) -> Vec<Song>{

   //let read_serialized_song = String::new();
   //let deserialized_song: Song = serde_json::from_str(read_serialized_song.as_str()).unwrap();

    let mut songs: Vec<Song> = Vec::new();
    songs

}