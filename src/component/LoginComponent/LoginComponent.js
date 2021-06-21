import React, { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { authenticateUser } from "./function/authenticateUser";

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

const LoginSection = ({ navigation }) => {

    const [textInputs, onChangeText] = useState({});
    const [errorText, setError] = useState(null);

    const onChangeTextFunction = (name, value) => {
        let newTextInputs = { ...textInputs, [name]: value };
        onChangeText(newTextInputs);
        setError(null);
    }

    const loginPressed = () => {
        const { email = null, password = null } = textInputs;

        let emailVerify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if(!email && !password){
            setError("Please enter email and password")
        }else if(!email){
            setError("Please enter email")
        }else if(!password){
            setError("Please enter password")
        }else if (emailVerify.test(email) === false) {
            setError("Please enter valid email")
        }else if(password.length < 8){
            setError("Password must be minimum 8 character")
        }else{
            authenticateUser(email, password, authenticationResponse)
        }
    }

    const authenticationResponse = (res) => {
        // console.log("authenticationResponse",res);
        //if user was there in database then create otp
        //pass res and otp to the next screen
        //screen will first send otp to node service
        //node service send otp to user via Eamil
        //after sucessfully send email validate enter otp
        if(res.data.code === "Email ERROR"){
            setError("Email Id is not registered")
        }else{
            navigation.navigate("Otp",{
                userDetails: res.data
            })
        }
    }

    return (
        <View style={{
            marginLeft: 20,
            marginRight: 20
        }}>
            <View>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor="#6e7c7c"
                    // maxLength={10}
                    textContentType={"emailAddress"}
                    onSubmitEditing={() => {
                        Keyboard.dismiss;
                    }}
                    onChangeText={(text) => {
                        onChangeTextFunction("email", text)
                    }}
                />
            </View>

            <View style={{ marginTop: 15 }}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Password"
                    placeholderTextColor="#6e7c7c"
                    secureTextEntry={true}
                    onSubmitEditing={() => {
                        Keyboard.dismiss;
                    }}
                    onChangeText={(text) => {
                        onChangeTextFunction("password", text);
                    }}
                />
            </View>

            {
                errorText ?
                    <Text style={{
                        fontSize: 14, color: "#ff0000",marginLeft: 20
                    }}
                    >
                        {errorText}
                    </Text>
                : null
            }

            <View style={{ marginTop: 5, marginRight: 10, alignItems: 'flex-end' }}>
                <TouchableOpacity>
                    <Text style={{ color: "#0099ff", }}>Forgot passsword</Text>
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
                        // onPress={() => navigation.navigate("Otp")}
                        onPress={() => {
                            loginPressed()
                        }}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const LoginComponent = ({ navigation }) => {

    console.log("Inside LoginComponent")

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={"handled"}
            contentContainerStyle={{ flexGrow: 1 }}
            extraHeight={130}
            bounces={false}
        >
            <View style={{ flex: 1, margin: 10 }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'space-around',
                    // marginTop: 30
                }}>
                    <LogoComponent />
                </View>
                <View style={{
                    flex: 1,

                }}>
                    <LoginSection navigation={navigation} />
                </View>

                <View
                    style={{
                        flex: 1,
                        // marginTop: 60,
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            borderBottomColor: "#d1d1d1",
                            borderBottomWidth: 1,
                            width: '80%',
                        }}
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
        </KeyboardAwareScrollView>
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