#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod model;
mod controller;

use crate::controller::song::{
  init, write_song, read_songs
};

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      init,
      write_song,
      read_songs
      ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

