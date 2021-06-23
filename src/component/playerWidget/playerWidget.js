import React, { useEffect, useRef } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';
import { useDispatch, useSelector } from 'react-redux';
import { NEXT_SONGS, PLAY_PAUSE_SONGS, PREV_SONGS } from '../../actions/actionTypes';
import { DATA_URL } from '../../envs/development';
// import { playpauseSongs } from '../../actions/actionTypes';

const PlayerWidget = () => {
    // const player = useRef(null)
    const redux = useSelector(state => state.player)
    console.log("Inside Player redux", redux);
    const reduxSave = useDispatch();
    // console.log("reduxDispatch",reduxSave)

    const nextSong = () => {
        const currentIdx = redux.playList.findIndex(x => redux.track.trackId === x.trackId)
        console.log("currentIdx",currentIdx)
        console.log("song",redux.playList[0])
        const nextSong = redux.playList[currentIdx + 1];
        console.log("nextSong",nextSong);
        if (nextSong && nextSong !== null) {
            reduxSave({ type: NEXT_SONGS, payload: nextSong })
        }
    }

    const prevSong = () => {
        const currentIdx = redux.playList.findIndex(x => redux.track.trackId === x.trackId)
        const prevSong = redux.playList[currentIdx - 1];
        if(prevSong && prevSong !== null){
            reduxSave({type: PREV_SONGS, payload: prevSong})
        }
    }



    return (
        <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', width: '100%', height: 60, bottom: 60, borderBottomWidth: 1, borderBottomColor: '#d1d1d1', borderTopWidth: 1, borderTopColor: '#d1d1d1', backgroundColor: 'white' }}>
            <TouchableOpacity style={{ flex: 4, flexDirection: 'row' }}>
                <View style={{ flex: 1, borderWidth: 1, margin: 5 }}>
                    <Image
                        source={{ uri: `${DATA_URL}poster/${redux.track.albumImgUrl}` }}
                        // source={require('../../assets/sairat.jpg')}
                        style={{ flex: 1, resizeMode: 'stretch', width: '100%' }}
                    />
                </View>
                <View style={{ flex: 4, justifyContent: 'center', marginLeft: 10 }}>
                    <Text>{redux.track !== null ? redux.track.trackUrl.substring(0, redux.track.trackUrl.indexOf(".")) : "SONG NAME"}</Text>
                </View>
            </TouchableOpacity>

            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1 }}> 
                    <Icon name="skip-previous" size={50} onPress={() => prevSong()}/>
                </View>
                <View style={{ flex: 1 }}>
                    {
                        redux.statusPlaying
                            ?
                            <Icon name="play-arrow" size={50} onPress={() =>
                                reduxSave({ type: PLAY_PAUSE_SONGS, payload: false })
                            } />
                            :
                            <Icon name="pause" size={50} onPress={() =>
                                reduxSave({ type: PLAY_PAUSE_SONGS, payload: true })
                            } />
                    }
                </View>
                <View style={{ flex: 1 }}> 
                    <Icon name="skip-next" size={50} onPress={() =>
                        nextSong()
                    } />
                </View>
            </View>
            <Video
                source={{ uri: `${DATA_URL}mp3/${redux.track !== null ? redux.track.trackUrl : null}` }}
                // ref={player}
                // volume={1.0}
                muted={false}
                paused={redux.statusPlaying}
                playInBackground={true}
                playWhenInactive={true}
                // onProgress={this.onPlayProgress}
                onEnd={nextSong}
                resizeMode="cover"
                repeat={false}
            />
        </View>
    )
}

export default PlayerWidget;