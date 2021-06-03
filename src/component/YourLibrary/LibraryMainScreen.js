import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { Text, View } from 'react-native';

import Favourite from '../Favourite/Favourite';

const LibraryMainScreen = () => {

    const [state, setState] = useState({
        // selectedTab
    })

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, borderBottomWidth: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Favourite</Text>
                </View>
            </View>
            <View style={{ flex: 8, }}>
                <Favourite/>
            </View>
        </View>
    )
}

export default LibraryMainScreen;

