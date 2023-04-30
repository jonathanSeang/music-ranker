#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod model;
mod controller;

use crate::controller::song::{
  init, write_songs, read_songs, safe_fn
};

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      init,
      write_songs,
      read_songs,
      safe_fn,
      ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

