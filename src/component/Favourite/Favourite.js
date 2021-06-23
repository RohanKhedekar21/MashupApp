import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { Image } from 'react-native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DATA_URL } from '../../envs/development'
import { getFavourite } from './function/getFavourite'
import { setFavourite } from './function/setFavourite'

const Favourite = () => {

    const [state, setState] = useState({
        favList: [],
        refreshCount: 0
    })

    useEffect(() => {
        getFavourite(getFavouriteCallback)
    }, [state.refreshCount])

    const getFavouriteCallback = (res) => {
        // console.log("getFavouriteCallback",res);
        if (res.data.result === 'success') {
            setState((prevState) => {
                let newState = {
                    ...prevState,
                    favList: res.data.data
                }
                return newState;
            })
        }
    }

    const setRemoveFavourite = async (trackId, index) => {
        // setFavourite(trackId, setFavouriteHandler)
        setFavourite(trackId, setFavouriteHandler)
    }

    const setFavouriteHandler = (res) => {
        // console.log("setFavouriteHandler",res)
        setState((prevState) => {
            let newState = {
                ...prevState,
                refreshCount: prevState.refreshCount + 1,
            };
            return newState;
        });
    };

    // const renderItem = ({ item, index }) => {
    //     return (
    //         <View style={{ flex: 1, flexDirection: 'row', height: 50, width: '100%' }}>
    //             {/* <View style={{flex: 1,backgroundColor: 'lightpink'}}>
    //                 <View style={{flex: 1,borderWidth: 1,margin: 5}}>

    //                 </View>
    //             </View> */}
    //             <View style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
    //                 <TouchableOpacity onPress={() => {
    //                     // reduxSave({type: SELECT_SONGS, payload: {
    //                     //     track: item,
    //                     //     playList: item
    //                     // }})
    //                 }}>
    //                     <Text style={{ fontSize: 20 }}>{item.name}</Text>
    //                 </TouchableOpacity>
    //             </View>
    //             <View style={{ flex: 1,/* backgroundColor: 'yellow', */justifyContent: 'center', alignItems: 'center' }}>
    //                 <Icon name="favorite-border" size={30} onPress={() => {

    //                 }} />
    //             </View>
    //         </View>
    //     )
    // }
    const renderItem = ({ item, index }) => {
        // console.log("renderItem", item);
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
                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
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


    return (
        <View>
            <FlatList
                data={state.favList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Favourite;

const arr = [
    { name: "one" },
    { name: "two" },
    { name: "three" },
    { name: "four" },
    { name: "five" },
    { name: "six" },
    { name: "seven" },
]