import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const getPosition = (position) => {
    switch (position) {
        case 'left':
            return { position: 'absolute', left: 20, bottom: 20 }
        default: return { position: 'absolute', right: 20, bottom: 20 }
    }
}


const CustomAction = ({ children, onPress, style, position }) => {


    const floatingActionButton = position ? getPosition(position) : []

    return (
        <TouchableOpacity style={floatingActionButton} onPress={onPress} >
            <View style={[styles.button, style]}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

export default CustomAction

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#deada5',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
