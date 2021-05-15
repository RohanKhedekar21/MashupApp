import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../component/Home/HomeScreen';
import RadioScreen from '../component/Radio/RadioScreen';
import SettingMain from '../component/Setting/SettingMain';
import LibraryMainScreen from '../component/YourLibrary/LibraryMainScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomePageRoute from './HomePageRoute';
import { View } from 'react-native';
import { Text } from 'react-native';
import PlayerWidget from '../component/PlayerWidget/PlayerWidget';

const MainAppRouter = () => {

    const Tab = createBottomTabNavigator();

    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        height: 60
                    },
                    labelStyle: {
                        fontSize: 12
                    }
                }}
            >
                <Tab.Screen
                    name="HomeScreen"
                    component={HomePageRoute}
                    options={() => ({
                        title: "Home",
                        tabBarIcon: () => (
                            <Icon name="home" size={30} />
                        )
                    })}
                />
                <Tab.Screen
                    name="Radio"
                    component={RadioScreen}
                    options={() => ({
                        tabBarIcon: () => (
                            <Icon name="radio" size={30} />
                        )
                    })}
                />
                <Tab.Screen
                    name="Your Library"
                    component={LibraryMainScreen}
                    options={() => ({
                        tabBarIcon: () => (
                            <Icon name="library-music" size={30} />
                        )
                    })}
                />
                <Tab.Screen
                    name="Setting"
                    component={SettingMain}
                    options={() => ({
                        tabBarIcon: () => (
                            <Icon name="settings" size={30} />
                        )
                    })}
                />
            </Tab.Navigator>
            {/* <View style={{ position: 'absolute', width: '100%', height: 60, bottom: 60, zIndex: 5, backgroundColor: 'red' }}>
                <Text>Rohan</Text>
            </View> */}
            <PlayerWidget/>
        </>
    )
}

export default MainAppRouter;