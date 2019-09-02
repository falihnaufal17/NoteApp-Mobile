import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'

export class splash extends Component {
    render() {
        return (
            <View style={styles.root}>
                <ActivityIndicator size="large" color="blue" />
                <Text>Note App will running! please wait...</Text>
            </View>
        )
    }
}

export default splash

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
