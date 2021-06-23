import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Text, View } from 'react-native';
import AppRouter from '../router/AppRouter';
import { getStorage } from '../utility/localutility';
import AutoLogin from './AutoLogin';

const InitApp = () => {
    console.log("Inside InitApp");

    const [NextRouter, setNextRouter] = useState(null)

    useEffect(() => {
        checkForPreviousLogin()
    }, [])

    const checkForPreviousLogin = async () => {
        let userCredentials = await getStorage('userCredentials')
        console.log("userCredentials",userCredentials)
        if (!userCredentials) {
            console.log("user not present")
            setNextRouter('Login')
        } else {
            console.log("user present AutoLogin")
            let returnCode = await AutoLogin(userCredentials)
            console.log("returnCode",returnCode)
            if (returnCode === "E") {
                autoLoginAlert('Failed Autologin. Routing to login screen', setNextRouter);
            } else {
                console.log("else")
                setNextRouter("MainAppStack")
            }
        }
    }

    const autoLoginAlert = (message, setNextRouter) => {
        // This function is called when the auto login has failed and the user is to be routed to login screen

        Alert.alert(
            'Alert',
            message,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        setNextRouter('Login');
                    }
                }
            ],
            { cancelable: false }
        )
    };

    const DefaultComponent = () => {
        return (
            <View>
                <Text>
                </Text>
            </View>
        );
    };

    if (NextRouter) {
        return (
            <AppRouter NextRouter={NextRouter} />
        )
    } else {  // If next router is not set, application will show blank screen till next router is set
        return (
            <DefaultComponent />
        )
    }

    // return (
    //     <AppRouter />
    // )
}

export default InitApp;