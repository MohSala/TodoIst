import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import CustomAction from '../CustomAction'
import * as firebase from 'firebase/app'
import 'firebase/auth'



export class LoginScreen extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }

    onSignIn = async () => {
        if (this.state.email && this.state.password) {
            this.setState({ isLoading: true })
            try {
                const response = await firebase.auth()
                    .signInWithEmailAndPassword(this.state.email, this.state.password)
                if (response) {
                    this.setState({ isLoading: false })
                    this.props.navigation.navigate('LoadingScreen')
                }
            }
            catch (error) {
                this.setState({ isLoading: false })
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert('User with that email does not exist. Sign up')
                        break;
                    case 'auth/invalid-email':
                        alert('Plase enter an email address')
                }
            }
        }
        else {
            alert('Please enter email and password')
        }

    }

    onSignUp = async () => {
        if (this.state.email && this.state.password) {
            this.setState({
                isLoading: true
            })
            try {
                const response = await firebase.auth()
                    .createUserWithEmailAndPassword(this.state.email,
                        this.state.password)
                if (response) {
                    this.setState({ isLoading: false })
                    //signin
                    this.onSignIn(this.state.email, this.state.password)
                }
            }
            catch (error) {
                this.setState({ isLoading: false })
                if (error.code == 'auth/email-already-in-use') {
                    alert('User Already exists. Try logging in')
                }

            }
        } else {
            alert('Please enter email and password')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.isLoading ?
                    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center', zIndex: 1000, elevation: 1000 }]}>
                        <ActivityIndicator size="large" color="#deada5" />
                    </View> : null}
                <View style={{ flex: 1, justifyContent: 'center', borderColor: 'orange' }}>
                    <TextInput style={styles.textInput}
                        placeholder='abc@example.com'
                        placeholderTextColor='grey'
                        keyboardType='email-address'
                        onChangeText={(email) => { this.setState({ email }) }}
                    />
                    <TextInput style={styles.textInput}
                        placeholder='Enter password'
                        secureTextEntry
                        placeholderTextColor='grey'
                        keyboardType='visible-password'
                        onChangeText={(password) => { this.setState({ password }) }}
                    />
                    <View style={{ alignItems: 'center' }}>
                        <CustomAction onPress={this.onSignIn} style={[styles.loginButton, { borderColor: '#deada5' }]}><Text style={{ color: 'white' }}>LOG IN</Text></CustomAction>
                        <CustomAction onPress={this.onSignUp} style={[styles.loginButton, { borderColor: '#deada5' }]}><Text style={{ color: 'white' }}>SIGN UP</Text></CustomAction>

                    </View>
                </View>
                <View style={{ flex: 1, borderColor: 'black' }} />
            </View>
        )
    }
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#070f30',

    },
    textInput: {
        height: 50,
        borderWidth: 0.5,
        borderColor: '#deada5',
        marginHorizontal: 40,
        marginBottom: 10,
        color: 'white',
        paddingHorizontal: 10
    },
    loginButton: {
        borderWidth: 0.5,
        backgroundColor: 'transparent',
        marginTop: 10,
        width: 200
    }
})
