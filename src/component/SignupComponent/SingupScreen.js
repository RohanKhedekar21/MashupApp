import React, { useState } from 'react';
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { registerUser } from './function/registerUser';


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

const SignupSection = ({navigation}) => {
    // console.log("navigation",navigation)

    const [textInputs, onChangeText] = useState({});
    const [errorText, setError] = useState(null);

    const onChangeTextFunction = (name, value) => {
        let newTextInputs = { ...textInputs, [name]: value };
        onChangeText(newTextInputs);
        setError(null);
    }

    const singupPressed = () => {
        const { email = null, password = null, confirmPassword = null } = textInputs;

        let emailVerify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (!email && !password && !confirmPassword) {
            setError("Please enter email and password")
        } else if (!email) {
            setError("Please enter email")
        } else if (!password) {
            setError("Please enter password")
        } else if (!confirmPassword) {
            setError("Please enter the password again")
        } else if (emailVerify.test(email) === false) {
            setError("Please enter valid email")
        } else if (password.length < 8) {
            setError("Password must be minimum 8 character")
        } else if (confirmPassword !== password) {
            setError("The password you entered do not match.")
        } else {
            registerUser(email, confirmPassword, registerUserCallback)
        }
    }

    const registerUserCallback = (res) => {
        console.log("registerUserCallback", res)
        if(res.data.code === "Email ERROR"){
            setError("A user already exists with this email address.")
        }else{
            navigation.navigate("Otp",{
                userDetails: {
                    email: textInputs.email,
                    password: textInputs.password
                }
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

            <View style={{ marginTop: 15 }}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Confirm Password"
                    placeholderTextColor="#6e7c7c"
                    secureTextEntry={true}
                    onSubmitEditing={() => {
                        Keyboard.dismiss;
                    }}
                    onChangeText={(text) => {
                        onChangeTextFunction("confirmPassword", text);
                    }}
                />
            </View>

            {
                errorText ?
                    <Text style={{
                        fontSize: 14, color: "#ff0000", marginLeft: 20
                    }}
                    >
                        {errorText}
                    </Text>
                    : null
            }

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
                        onPress={() => {
                            singupPressed()
                        }}
                    >
                        <Text>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const SignupScreen = ({ navigation }) => {

    console.log("Inside SingupScreen")

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

                }}>
                    <LogoComponent />
                </View>

                <View style={{ flex: 1 }}>
                    <SignupSection navigation={navigation}/>
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
                            width: '40%',
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text
                                style={{
                                    color: "#ffc93c",
                                    fontSize: 25,

                                    textAlign: 'center',
                                }}
                            >
                                Login
                        </Text>
                        </TouchableOpacity>
                    </View>
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

export default SignupScreen;