import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { clearStorage } from '../../utility/localutility';

const SettingMain = (props) => {
    console.log("inside settingMain",props)
    return (
        <View style={{flex: 1,backgroundColor: '#EEEEEE'}}>
            <View style={{flex: 1.8,borderBottomWidth: 1,borderBottomColor: '#d1d1d1'}}>
                <View style={{flex: 5,justifyContent: 'center',alignItems: 'center'/* ,paddingTop: 20 */}}>
                    <Icon name="account-circle" size={250} color="#BDBDBD"/>
                </View>
                <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginBottom: 5}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rohan Khedekar</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15,color: 'blue'}}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 2}}>
                <View style={{flex: 1, margin: 10}}>
                    <TouchableOpacity style={{marginBottom: 20}}>
                        <Text style={{fontSize: 20}}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom: 20}}>
                        <Text style={{fontSize: 20}}>Contact us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom: 20}} 
                        onPress={()=> {
                            clearStorage();
                            props.navigation.navigate("Login")
                        }}
                    >
                        <Text style={{fontSize: 20}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SettingMain;