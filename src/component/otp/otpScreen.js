import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { setStorage } from '../../utility/localutility';
import { sentOtpEmail } from './function/sentOtpEamil';

const otpScreen = (props) => {
    console.log("Inside otpScreen", props);

    const redux = useDispatch();

    const [otp, setOtp] = useState();

    const [state, setState] = useState({
        userId: props.route.params.userDetails.userId,
        userEmail: props.route.params.userDetails.email,
        userPassword: props.route.params.userDetails.password,
        otp: "",
        enterOtp: "",
        err: false
    });

    // const [otp, setOtp] = useState("")

    useEffect(() => {
        let otp = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
        setState((prevState) => {
            let newState = {
                ...prevState,
                otp
            }
            return newState;
        })
        sentOtpEmail(state.userEmail, otp, sentOtpEmailCallback)
    }, [])

    const sentOtpEmailCallback = (res) => {
        console.log("sentOtpEmailCallback");
    }

    const verifyOtp = async () => {
        if (state.otp !== state.enterOtp) {
            setState((prevState)=>{
                let newState = {
                    ...prevState,
                    err: true
                }
                return newState;
            })
        }else{
            let userCredentials = {
                email: state.userEmail,
                password: state.userPassword
            }
            console.log("userCredentials",userCredentials)
            await setStorage('userCredentials',userCredentials);
            props.navigation.navigate("MainAppStack")
        }
    }

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={"handled"}
            contentContainerStyle={{ flexGrow: 1 }}
            extraHeight={130}
            bounces={false}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginBottom: 100 }}>
                    <Text style={{ fontSize: 30 }}>Enter your code</Text>
                    <Text style={{ color: '#6c7a89' }}>we sent an Email with a 4-digit code to email-ID</Text>
                    <TextInput
                        style={{ borderBottomWidth: 1, marginBottom: 20, marginTop: 10 }}
                        placeholder="Enter Code"
                        keyboardType="numeric"
                        maxLength={4}
                        value={state.enterOtp}
                        onChangeText={(text) => {
                            if(!/[^0-9]/g.test(text.toString())){
                                setState((prevState)=>{
                                    let newState = {
                                        ...prevState,
                                        enterOtp: text
                                    }
                                    return newState
                                })
                            }
                        }}
                    />
                    {
                        state.err ?
                            <Text style={{ color: 'red', marginBottom: 20 }}>
                                Please enter a valid 4 digit code to login
                            </Text>
                        : null
                    }

                    <Button
                        style={{}}
                        title="Next"
                        onPress={() => verifyOtp()}
                    />
                    <Text style={{ marginTop: 10, color: '#3498db' }}>Resend Code</Text>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default otpScreen;