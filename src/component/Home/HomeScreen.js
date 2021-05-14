import React from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AlbumList from '../AlbumList/AlbumList';
import ArtistList from '../ArtistList/ArtistList';
import Banner from '../Banner/Banner';
import { Overlay } from 'react-native-elements';

const Header = () => {
    return (
        <View style={{ flex: 1, borderColor: "#d1d1d1", borderWidth: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{ flex: 5 }}>
                <Image
                    resizeMode="contain"
                    style={{
                        flex: 1,
                        width: '60%',
                        marginLeft: 10
                    }}
                    source={require('../../assets/HomePageHeading.png')}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Icon name="search" size={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const HomeScreen = (props) => {
    // console.log("HomeScreen",props);

    return (
        <View style={{ flex: 1 }}>

            <View style={{flex: 1}}>
                <Header />
            </View>

            <View style={{ flex: 10, margin: 10 }}>
                <View style={{ flex: 1, borderWidth: 2 }}>
                    <Banner {...props}/>
                </View>
                <View style={{flex: 2}}>
                    <View style={{marginTop: 30,height: 160,/* borderWidth: 1 */}}>
                        <AlbumList {...props}/>
                    </View>
                    <View style={{marginTop: 30,height: 160,/* borderWidth: 1 */}}>
                        <ArtistList {...props}/>
                    </View>
                </View>
            </View>

            {/* <Overlay fullScreen={false} style={{position: 'absolute',backgroundColor: 'red'}}>
                <View>
                    <Text>Rohan</Text>
                </View>
            </Overlay> */}
        </View>
    )
}

export default HomeScreen;