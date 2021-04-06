import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import LoginComponent from '../component/LoginComponent/LoginComponent';
import SignupScreen from '../component/SignupComponent/SingupScreen';

const Stack = createStackNavigator();

const AppRouter = () => {
    console.log("Inside AppRouter");

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Login"}
            >
                <Stack.Screen
                    name="Login"
                    component={LoginComponent}
                    options={{
                        header: () => false
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignupScreen}
                    options={{
                        header: () => false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRouter;