import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { List, ListItem, Left, Icon, } from 'native-base';

export class Drawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/w644.png')} style={styles.avatar} />
                <View style={styles.viewProfileData}>
                    <Text style={styles.txtFullname}>Shaloom Razade</Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    <List>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Home')}
                        >
                            <ListItem>
                                <Left>
                                    <Text style={styles.txtMenu}><Icon name="map" type="Ionicons" style={styles.iconStyle} /> Map</Text>
                                </Left>
                            </ListItem>
                        </TouchableOpacity>
                    </List>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    txtMenu: {
        fontSize: 14,
        width: '100%'
    },
    iconStyle: {
        color: 'steelblue',
        fontSize: 20,
    },
    txtEmail: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    txtFullname: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 5
    },
    viewProfileData: {
        alignSelf: 'center'
    },
    avatar: {
        marginVertical: 25,
        alignSelf: 'center',
        width: 86,
        height: 86,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 100 / 2
    },
    background: {
        backgroundColor: '#ffffff',
    },
    imgBackground: {
        width: '100%',
        height: 180,
        opacity: 0.6,
    },
    container: {
        flex: 1
    }
})

export default Drawer
