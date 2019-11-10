import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { DrawerItems } from 'react-navigation-drawer'

export class CustomDrawerComponent extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <SafeAreaView style={{ backgroundColor: 'white' }} />
                <View style={{
                    height: 150, backgroundColor: 'white', flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Ionicons name="ios-bookmarks" size={100} color={'#a5deba'} />
                </View>
                <DrawerItems {...this.props} />
            </ScrollView>
        )
    }
}

export default CustomDrawerComponent


const styles = StyleSheet.create({
    container: {

    }
})