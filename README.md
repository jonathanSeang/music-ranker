## Objective: Rank and filter your music

---

## TODO

- ~~Write music to txt file~~
- ~~Read music from txt file~~
- ~~Create form to insert new music~~
- Neatly display music 
    - Rank list table
    - Show "about" and "lyrics" tab
- Fetch music based on filter
    - Switch between users
- CRUD user comments
- Download music files
- Audio player on available downloaded music
- Create playlist

---

## Running program

cargo tauri dev

---

## Backend Structure

- src

    - api- where rest apis are defined
    - model- api models
    - repository- interface for dependencies 

- data

    - each user has a json file in data folder
    - each json file has all songs they've inputted


data structure 

- song
    - song name
    - main artist
    - album
    - main genre
    - language
    - lyrics
    - rating (range: [0, 20])