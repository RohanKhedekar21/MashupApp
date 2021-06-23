import React, { useState } from 'react';
import { useEffect } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { getBanner } from './functions/getBanner';
import Carousel from 'react-native-snap-carousel';
import { DATA_URL } from '../../envs/development';
import { Pagination } from 'react-native-snap-carousel';
// import image from '../../assets/'

const Banner = () => {

    // console.log("Inside Banner")
    const [state, setState] = useState({
        banner: [],
        activeSlide: 0
    })

    useEffect(() => {
        getBanner(getBannerHandler)
    }, [])

    const getBannerHandler = (res) => {
        // console.log("getBannerHandler", res);
        setState(prevState => {
            let newState = {
                ...prevState,
                banner: res.data
            }
            return newState;
        })
    }

    const renderItem = ({ item, index }) => {
        const imgURL = `${DATA_URL}banner/${item.bannerPoster}`
        // console.log("imgURL",imgURL)
        return (
            <View key={index} style={{flex: 1}}>
                <Image 
                    key={index}
                    source={{ uri: imgURL }}
                    // source={require('../../assets/sairat_poster.jpg')}
                    style={{ flex: 1,resizeMode: 'stretch', width: '100%' }} 
                />
            </View>
        );
    }

    const pagination = () => {
        // const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={state.banner.length}
                activeDotIndex={state.activeSlide}
                containerStyle={{
                    position: 'absolute',
                    backgroundColor: 'rgba(0, 0, 0, 0.30)',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    paddingVertical: 10
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    // backgroundColor: 'rgba(255, 255, 255, 0.92)'
                    backgroundColor: '#ECF0F1'
                }}
                inactiveDotStyle={{
                    backgroundColor: "#FDFEFE"
                }}
                inactiveDotOpacity={0.7}
                inactiveDotScale={0.6}
            />
        );
    }

    return (
        <View style={{ flex: 1 }}>
            {/* <Text>Advertising....</Text> */}
            <Carousel
                //   ref={(c) => { this._carousel = c; }}
                data={state.banner}//state.banner
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width - 24}
                itemWidth={Dimensions.get('window').width }
                // containerCustomStyle={{ flex: 1 }}
                // slideStyle={{flex: 1}}
                onSnapToItem={(index) =>
                    setState((prevState) => {
                        let newState = {
                            ...prevState,
                            activeSlide: index
                        }
                        return newState;
                    })
                }
                autoplay={true}
                autoplayDelay={5000}
                autoplayInterval={7000}
                loop

            />
            {pagination()}
        </View>
    )
}

export default Banner;

const arr = [
    {bannerId: "4", bannerPoster: "../../assets/Simmba_poster.jpg", albumId: "8"},
    {bannerId: "5", bannerPoster: "../../assets/sairat_poster.jpg", albumId: "1"}
]