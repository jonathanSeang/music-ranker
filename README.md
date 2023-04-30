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
    - genre [array]
    - album
    - language
    - lyrics
    - rating (int 0-20)

- comment
    - song id
    - comment
    - uploader