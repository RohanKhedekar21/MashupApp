import React from "react";
import { Button, Image, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LogoComponent = () => {
    return (
        <View>
            <Image
                style={styles.logoHaderImage}
                resizeMode="stretch"
                source={require("../../assets/LoginIcon.png")}
            />
        </View>
    )
}

const LoginSection = ({navigation}) => {
    return (
        <View style={{
            marginLeft: 20,
            marginRight: 20
        }}>
            <View>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Mobile"
                    keyboardType="numeric"
                    placeholderTextColor="#6e7c7c"
                    maxLength={10}
                    textContentType={"telephoneNumber"}
                    onSubmitEditing={() => {
                        Keyboard.dismiss;
                    }}
                />
            </View>
            
            <View style={{marginTop: 15}}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Password"
                    placeholderTextColor="#6e7c7c"
                    secureTextEntry={true}
                    onSubmitEditing={() => {
                        Keyboard.dismiss;
                    }}
                />
            </View>

            <View style={{marginTop: 5,marginRight: 10,alignItems: 'flex-end'}}>
                <TouchableOpacity>
                    <Text style={{color: "#0099ff",}}>Forgot passsword</Text>
                </TouchableOpacity>
            </View>

            <View 
                style={{
                    marginTop: 30,
                    alignItems: 'center'
                }}
            >
                <View 
                    style={{
                        height: 40,
                        width: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: "#d1d1d1",
                        borderRadius: 25,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            opacity: 0.7
                        }}
                        onPress={() => navigation.navigate("MainAppStack")}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

const LoginComponent = ({navigation}) => {

    console.log("Inside LoginComponent")

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={{
                flex: 1,
                justifyContent: 'space-around',
                // marginTop: 30
            }}>
                <LogoComponent />
            </View>
            <View style={{ flex: 1,
                
            }}>
                <LoginSection navigation={navigation}/>
            </View>
            
            <View 
                style={{
                    flex: 1,
                    // marginTop: 60,
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        borderBottomColor: "#d1d1d1",
                        borderBottomWidth: 1,
                        width: '80%',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text 
                            style={{
                                color: "#ffc93c",
                                fontSize: 25,
                                
                                textAlign: 'center',
                            }}
                        >
                            Create new account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logoHaderImage: {
        alignSelf: "center",
        height: 80,
        width: '100%',
    },
    loginHeader: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 40,

    },
    textInputStyle: {
        borderColor: "#d1d1d1",
        borderWidth: 1,
        borderRadius: 25,
        paddingLeft: 25,

    }

})

export default LoginComponent;