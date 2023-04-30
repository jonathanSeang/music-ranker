use serde_json;


use std::fs::File;
use std::io::prelude::*;
use std::path::Path;

use crate::model::song::Song;

#[tauri::command]
pub fn init() {
    // let ex_song = Song {
    //     name: String::from("The Garden"),
    //     artist: String::from("The Family Crest"),
    //     album: String::from("The War: Act II"),
    //     genre: String::from("Orchestra"),
    //     language: String::from("English"),
    //     lyrics: String::from("There's a garden..."),
    //     rating: 18
    // };

    // let ex_song2 = Song {
    //     name: String::from("I sleep with the windows open"),
    //     artist: String::from("The Family Crest"),
    //     album: String::from("The War: Act II"),
    //     genre: String::from("Orchestra"),
    //     language: String::from("English"),
    //     lyrics: String::from("There's a garden..."),
    //     rating: 19
    // };
// 
    // let mut songs: Vec<Song> = Vec::new();
    // songs.push(ex_song);
    // songs.push(ex_song2);
    // write_song(songs, "jon");

}

//WRITE---------------------------------------------------

//write song to file 
#[tauri::command]
pub fn write_song(song: Vec<Song>, uploader: &str) {

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
pub fn read_songs(name: &str) -> Vec<Song>{
// pub async fn read_songs() -> Vec<Song>{

    // Create a path to the desired file
    let path_name = format!("data/{}.txt", name);
    let path = Path::new(&path_name);
    let display = path.display();

    // Open the path in read-only mode, returns `io::Result<File>`
    let mut file = match File::open(&path) {
        Err(why) => panic!("couldn't open {}: {}", display, why),
        Ok(file) => file,
    };

    // Read the file contents into a string, returns `io::Result<usize>`
    let mut raw_songs = String::new();
    match file.read_to_string(&mut raw_songs) {
        Err(why) => panic!("couldn't read {}: {}", display, why),
        Ok(_) => print!("{} contains:\n{}", display, raw_songs),
    }

    // `file` goes out of scope, and the "hello.txt" file gets closed

    let songs: Vec<Song> = serde_json::from_str(raw_songs.as_str()).unwrap();
    songs

}