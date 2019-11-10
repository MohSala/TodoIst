import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { CircleLoader } from 'react-spinners'

export class LoadingScreen extends Component {
    componentDidMount() {
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn = () => {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('HomeScreen', { user })
            }
            else {
                this.props.navigation.navigate('LoginStackNavigator')
            }
        })
    }

    componentWillUnmount = () => {
        this.unsubscribe()
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='#a5deba' />
            </View>
        )
    }
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})
