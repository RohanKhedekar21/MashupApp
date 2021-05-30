import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import LoginComponent from '../component/LoginComponent/LoginComponent';
import otpScreen from '../component/otp/otpScreen';
import SignupScreen from '../component/SignupComponent/SingupScreen';
import MainAppRouter from './MainAppRouter';

const Stack = createStackNavigator();

const AppRouter = ({ NextRouter='Login' }) => {
    console.log("Inside AppRouter");

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={NextRouter}
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
                <Stack.Screen
                    name="Otp"
                    component={otpScreen}
                    options={{
                        header: () => false
                    }}
                />
                <Stack.Screen
                    name="MainAppStack"
                    component={MainAppRouter}
                    options={{
                        header: () => false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRouter;