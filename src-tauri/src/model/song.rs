use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, PartialEq, Eq, Serialize)]
pub struct Song {

    pub name: String,
    pub artist: String,
    pub album: String,
    pub genre: String,
    pub language: String,
    pub instrumental: bool,
    pub lyrics: String,
    pub rating: u8

}