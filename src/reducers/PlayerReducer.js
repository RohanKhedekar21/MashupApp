import { NEXT_SONGS, PLAY_PAUSE_SONGS, PREV_SONGS, SELECT_SONGS } from "../actions/actionTypes";

let INITIAL_STATE = {
    // pause: false,
    // songIndex: -1,
    // songs: [],
    // currentTime: 0

    statusPlaying: false,
    track: null,
    playList: [],
    currentTime: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        // case PLAY_SONG: 
        //     return {...state, ...action.payload}
        // case UPDATE_PAUSED:
        //     return {...state, ...action.payload}
        // case SET_PLAY_TIME:
        //     return {...state, ...action.payload}
        case SELECT_SONGS : {
            // return {...state, ...action.payload}
            console.log("SELECT_SONGS",action.payload.track )
            const newState = {
                ...state,
                statusPlaying: false,
                track: action.payload.track,
                playList: action.payload.playList
            }
            return newState;
        }
        case PLAY_PAUSE_SONGS: {
            // return {...state, ...action.payload}
            const newState = {
                ...state,
                statusPlaying: action.payload
            }
            return newState;
        }
        // case PLAY_SONGS: 
        //     // return {...state, ...action.payload}
        //     const newState = {
        //         ...state,

        //     }
        case NEXT_SONGS: 
            // return {...state, ...action.payload}
            const newState = {
                ...state,
                statusPlaying: false,
                track: action.payload
            }
            return newState;
        case PREV_SONGS:{
            // return {...state, ...action.payload}
            const newState = {
                ...state,
                statusPlaying: false,
                track: action.payload
            }
            return newState;
        }
        default :
            return state;
    }
}