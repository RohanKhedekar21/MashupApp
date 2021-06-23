import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { DATA_URL } from '../../envs/development';
import { getArtists } from './function/getArtists';

const ArtistList = ({navigation}) => {

    const [state, setState] = useState({
        artistList: []
    })

    useEffect(() => {
        getArtists(getArtistsHandler)
    }, [])

    const getArtistsHandler = (res) => {
        // console.log("getArtistsHandler",res);
        setState((prevState) => {
            let newState = {
                ...prevState,
                artistList: res.data
            }
            return newState;
        })
    }

    const renderItem = ({ item, index }) => {
        const imgURL = `${DATA_URL}artist/${item.artistImgUrl}`
        // console.log("imgURL",imgURL);
        return (
            <View key={index} style={{/* borderWidth: 1, */flex: 1, width: 110, margin: 5, alignItems: 'center' }}>
                <TouchableOpacity style={{ flex: 1, width: 110, alignItems: 'center' }} onPress={() => {
                    navigation.navigate("SongDetails", {
                        SongDetails: {
                            type: 'artist',
                            Id: item.artistId,
                            Name: item.artistName,
                            imgURL: item.artistImgUrl,
                        }
                    })
                }} >
                    <Image
                        source={{ uri: imgURL }}
                        // source={require('../../assets/Ajay-Atul.jpg')}
                        style={{ flex: 1, resizeMode: 'cover', width: '100%' }}
                        // style={{width: 60, height: 60, borderRadius: 60/ 2}} 
                        borderRadius={550}
                    />
                    <Text style={{ fontSize: 12 }}>{item.artistName}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row'/* , borderBottomWidth: 1 */, paddingLeft: 5, paddingRight: 5 /* backgroundColor: 'pink' */ }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Artists</Text>
                </View>
                {/* <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text>See All</Text>
                </View> */}
            </View>
            <View style={{ flex: 5 }}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        horizontal
                        data={state.artistList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    )
}

export default ArtistList;


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