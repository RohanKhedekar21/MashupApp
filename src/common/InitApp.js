import React from 'react';
import { Text, View } from 'react-native';
import AppRouter from '../router/AppRouter';

const InitApp = () => {
    console.log("Inside InitApp");

    return (
        <AppRouter />
    )
}

export default InitApp;