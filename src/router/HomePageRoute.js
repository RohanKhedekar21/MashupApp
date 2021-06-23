import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import SongDetails from '../common/SongDetails';
import HomeScreen from '../component/Home/HomeScreen';

const HomePageRoute = () => {

    const HomeStack = createStackNavigator();

    return (
        <>
            <HomeStack.Navigator
                initialRouteName="HomeScreen"
            >
                <HomeStack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={(navigation) => ({
                        header: () => false
                        // title: "welcome",
                        // headerLeft: null
                    })}
                />
                <HomeStack.Screen
                    name="SongDetails"
                    component={SongDetails}
                    options={{
                        header: () => false
                    }}
                />
            </HomeStack.Navigator>
        </>
    )

}

export default HomePageRoute;