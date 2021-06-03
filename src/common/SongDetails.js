import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { SELECT_SONGS } from '../actions/actionTypes';
import { setFavourite } from '../component/Favourite/function/setFavourite';
// import nextSong from '../actions/playerAction';
import { DATA_URL } from '../envs/development';
import { getSongsList } from './functions/getSongsList';

const SongDetails = (props) => {
    // console.log("Inside SongDetails", props.route.params);

    const reduxSave = useDispatch();

    const [state, setState] = useState({
        SongDetails: props.route.params.SongDetails,
        tracks: [],
        refresh: 0
    })

    useEffect(() => {
        getSongsList(state.SongDetails.type, state.SongDetails.Id, getSongsListHandler)
    }, [props.route.params, state.refresh])

    const getSongsListHandler = (res) => {
        // console.log("getSongsListHandler res",res)
        setState((prevState) => {
            let newState = {
                ...prevState,
                tracks: res.data
            }
            return newState;
        })
    }

    // console.log("state", state.tracks[0])

    const renderItem = ({ item, index }) => {
        console.log("renderItem", item);
        return (
            <View style={{ flex: 1, flexDirection: 'row', height: 50, width: '100%' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, borderWidth: 1, margin: 5 }}>
                        <Image
                            source={{ uri: `${DATA_URL}poster/${item.albumImgUrl}` }}
                            // source={require('../../assets/sairat.jpg')}
                            style={{ flex: 1, resizeMode: 'stretch', width: '100%' }}
                        />
                    </View>
                </View>
                <View style={{ flex: 4, /* backgroundColor: 'lightgreen', */ justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                    <TouchableOpacity onPress={() => {
                        reduxSave({
                            type: SELECT_SONGS, payload: {
                                track: item,
                                playList: item
                            }
                        })
                    }}>
                        <Text style={{ fontSize: 20 }}>{item.trackTitle}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1,/* backgroundColor: 'yellow', */justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={item.isFav ? "favorite" : "favorite-border"} size={30} color={item.isFav ? "#f03434" : 'black'}
                        onPress={() => {
                            setRemoveFavourite(item.trackId, index)
                            // setFavourite(item.trackId, setFavouriteHandler)
                        }} />
                </View>
            </View>
        )
    }

    const setRemoveFavourite = async (trackId, index) => {
        // setFavourite(trackId, setFavouriteHandler)

        const setFavouriteHandler = (res) => {
            console.log("setFavouriteHandler", res);

            let tempdata = state.tracks

            switch (res.data.code) {
                case "setFav":
                    tempdata[index].isFav = true
                    break;
                case "removeFav":
                    tempdata[index].isFav = false
                    break;
                default:
                    break;
            }

            setState((prevState) => {
                let newState = {
                    ...prevState,
                    tracks: tempdata
                }
                return newState;
            })
        }

        setFavourite(trackId, setFavouriteHandler)
    }

    // const setFavouriteHandler = (res) => {
    //     console.log("setFavouriteHandler", res);
    // }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, /* backgroundColor: 'lightblue', */ paddingBottom: 20 }}>
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                    <View style={{ flex: 1, borderWidth: 1, width: '50%'/* ,margin: 30  */ }}>
                        <Image
                            source={{ uri: `${DATA_URL}${state.SongDetails.type === 'artist' ? "artist" : "poster"}/${state.SongDetails.imgURL}` }}
                            // source={require('../../assets/sairat.jpg')}
                            style={{ flex: 1, resizeMode: 'stretch', width: '100%' }}
                        />
                    </View>
                    <Text style={{ fontSize: 20, marginTop: 8 }}>{state.SongDetails.Name}</Text>
                    <TouchableOpacity style={{ marginTop: 5, borderWidth: 1, width: 90, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            reduxSave({
                                type: SELECT_SONGS, payload: {
                                    track: state.tracks[0],
                                    playList: state.tracks
                                }
                            })
                        }}
                    >
                        <Text>PLAY</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1.1, /* backgroundColor: 'lightgreen', */ paddingTop: 10 }}>
                <FlatList
                    data={state.tracks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default SongDetails;

const arr = [
    { name: "one" },
    { name: "two" },
    { name: "three" },
    { name: "four" },
    { name: "five" },
    { name: "six" },
    { name: "seven" },
]