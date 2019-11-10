import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CustomActionButton from '../../CustomAction'

export default class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.WelcomeScreenContainer}>
                <View style={{
                    flex: 1, alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Ionicons name="ios-bookmarks" size={150} color="#a5deba" />
                    <Text style={{ fontSize: 50, fontWeight: '100' }}>TodoIst</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <CustomActionButton
                        style={{ width: 200, backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#a5deba', marginBottom: 10 }}
                        title="Login"
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
                    >
                        <Text style={{ fontWeight: '100', color: 'black', fontSize: 25 }}>LOG IN</Text>
                    </CustomActionButton>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    WelcomeScreenContainer: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})