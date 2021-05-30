import { PLAY_PAUSE_SONGS, SELECT_SONGS } from "./actionTypes"

export const playpauseSongs = (statusPlaying) => ({
    type: PLAY_PAUSE_SONGS,
    payload: statusPlaying,
})

export const selectSongs = (track) => ({
    type: SELECT_SONGS,
    payload: track
})

// export const nextSong = () => (
//     (dispatch, getState) => {
//         console.log("Inside nextSong")
//         console.log("dispatch",dispatch)
//         console.log("getState",getState)
//     }
// )