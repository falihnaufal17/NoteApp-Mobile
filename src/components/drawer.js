import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { List, ListItem, Left, Icon, } from 'native-base';
import axios from 'axios'
import url from '../../Api'

export class Drawer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    getCategories() {
        axios.get(`${url}/categories`)
            .then((res) => {
                console.warn('Response: ', res.data.result)
                this.setState({
                    categories: res.data.result
                })
            })
            .catch((error) => {
                alert('oops something Wrong!')
            })
    }

    componentDidMount = async () => {
        await this.getCategories()
    }

    render() {
        let { categories } = this.state
        console.warn(categories)
        return (
            <View style={styles.container}>
                <Image source={require('../assets/w644.png')} style={styles.avatar} />
                <View style={styles.viewProfileData}>
                    <Text style={styles.txtFullname}>Shaloom Razade</Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    <List>
                        {
                            categories.map((item, key) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('Home')}
                                    >
                                        <ListItem>
                                            <Left>
                                                <Text style={styles.txtMenu}>{item.name}</Text>
                                            </Left>
                                        </ListItem>
                                    </TouchableOpacity>
                                )
                            })
                        }
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Home')}
                        >
                            <ListItem>
                                <Left>
                                    <Icon name="add" type='Ionicons' />
                                    <Text style={styles.txtMenu}>Add Category</Text>
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
