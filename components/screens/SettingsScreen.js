import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomActionButton from './../CustomAction'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export class SettingsScreen extends Component {

    signOut = async () => {
        try {
            await firebase.auth().signOut()
            this.props.navigation.navigate('WelcomeScreen')
        }
        catch (error) {
            alert('Unable to Sign Out')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <CustomActionButton
                    style={{ width: 200, backgroundColor: 'transparent', borderWidth: 0.5, borderColor: 'blue' }}
                    title="Sign Up"
                    onPress={() => this.signOut()}
                >
                    <Text style={{ fontWeight: '100', color: 'black', fontSize: 25 }}>LOG OUT</Text>
                </CustomActionButton>
            </View>
        )
    }
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})