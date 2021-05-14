import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DATA_URL } from '../../envs/development';
import { getAlbum } from './function/getAlbum';

const AlbumList = ({ navigation }) => {
    // console.log("AlbumList",props);
    const [state, setState] = useState({
        albumList: [],
    })

    useEffect(() => {
        getAlbum(getAlbumHandler)
    }, [])

    const getAlbumHandler = (res) => {
        // console.log("getAlbumHandler",res);
        setState(prevState => {
            let newState = {
                ...prevState,
                albumList: res.data
            }
            return newState;
        })
    }

    const renderItem = ({ item, index }) => {
        const imgURL = `${DATA_URL}poster/${item.albumImgUrl}`
        // console.log("imgURL",imgURL);
        return (
            <View key={index} style={{/* borderWidth: 1, */flex: 1, width: 110, margin: 5, alignItems: 'center' }}>
                <TouchableOpacity style={{ flex: 1, width: 110, alignItems: 'center' }} onPress={() => {
                    navigation.navigate("SongDetails", {
                        SongDetails: {
                            type: 'album',
                            Id: item.albumId,
                            Name: item.albumName,
                            imgURL: item.albumImgUrl,
                            releaseDate: item.albumReleaseDate
                        }
                    })
                }}>
                    <Image
                        source={{ uri: imgURL }}
                        // source={require('../../assets/sairat.jpg')}
                        style={{ flex: 1, resizeMode: 'stretch', width: '100%' }}
                    />
                    <Text style={{ fontSize: 12 }}>{item.albumName}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row'/* , borderBottomWidth: 1 */, paddingLeft: 5, paddingRight: 5 /* backgroundColor: 'pink' */ }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Albums</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text>See All</Text>
                </View>
            </View>
            <View style={{ flex: 5 }}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        horizontal
                        data={state.albumList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    )
}

export default AlbumList;


const arr = [
    { bannerId: "4", bannerPoster: "../../assets/Simmba_poster.jpg", albumId: "8" },
    { bannerId: "5", bannerPoster: "../../assets/sairat_poster.jpg", albumId: "1" },
    { bannerId: "5", bannerPoster: "../../assets/sairat_poster.jpg", albumId: "1" },
    { bannerId: "5", bannerPoster: "../../assets/sairat_poster.jpg", albumId: "1" },
    { bannerId: "5", bannerPoster: "../../assets/sairat_poster.jpg", albumId: "1" },
    { bannerId: "5", bannerPoster: "../../assets/sairat_poster.jpg", albumId: "1" },
    { bannerId: "5", bannerPoster: "../../assets/sairat_poster.jpg", albumId: "1" },
    { bannerId: "5", bannerPoster: "../../assets/sairat_poster.jpg", albumId: "1" }
]