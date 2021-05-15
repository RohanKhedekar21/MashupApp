import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlayerWidget = () => {
    return (
        <View style={{flex: 1, flexDirection: 'row', position: 'absolute', width: '100%', height: 60, bottom: 60,borderBottomWidth: 1,borderBottomColor: '#d1d1d1',borderTopWidth: 1,borderTopColor: '#d1d1d1', backgroundColor: 'white'}}>
            <View style={{flex: 1,borderWidth: 1,margin: 5}}></View>
            <View style={{flex: 4,justifyContent: 'center',marginLeft: 10}}>
                <Text>Song Name</Text>
            </View>
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                <Icon name="pause" size={50} />{/* pause */}{/* play-arrow */}
            </View>
        </View>
    )
}

export default PlayerWidget;