import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import AppBar from '../../components/header'
import axios from 'axios'
import { FlatGrid } from 'react-native-super-grid';
import { Card, CardItem, Title, Subtitle, Fab, Icon, Button } from 'native-base'
import url from '../../../Api'
import MarqueeText from 'react-native-marquee';
import moment from 'moment';

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: []
        }
    }

    componentDidMount = async () => {
        await this.getAllNotes()
    }

    getAllNotes() {
        axios.get(`${url}/notes`)
            .then((res) => {
                console.warn('response: ', res.data.result)
                this.setState({
                    notes: res.data.result
                })
            })
            .catch((error) => {
                console.warn('error: ', error)
            })
    }

    cutText = (text) => {
        if (text.length > 30) {
            let textSplit = text.substr(0, 20);
            return `${textSplit} ...`;
        } else {
            let textSplit = text;
            return `${textSplit}`;
        }
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.9}>
                <Card style={{ height: 180, backgroundColor: `${item.color}`, borderRadius: 10 }}>
                    <CardItem style={{ backgroundColor: `${item.color}` }}>
                        <Text style={{ color: '#ffffff', textAlign: 'right', marginLeft: 'auto' }}>{moment(item.updated_at).format('DD MMM')}</Text>
                    </CardItem>
                    <CardItem style={{ backgroundColor: `${item.color}` }}>
                        <MarqueeText
                            style={{ fontSize: 24 }}
                            duration={3000}
                            marqueeOnStart
                            loop
                            marqueeDelay={1000}
                            marqueeResetDelay={1000}
                        >
                            <Title style={{ color: '#ffffff', textAlign: 'left', textTransform: 'capitalize' }}>{item.title}</Title>
                        </MarqueeText>
                    </CardItem>
                    <CardItem style={{ backgroundColor: `${item.color}` }}>
                        <Subtitle style={{ color: '#ffffff', textAlign: 'left' }}>{this.cutText(item.description)}</Subtitle>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }

    render() {
        let { notes } = this.state
        console.warn(notes)
        return (
            <>
                <AppBar />
                <View style={styles.root}>
                    <FlatGrid
                        itemDimension={130}
                        showsVerticalScrollIndicator={false}
                        items={notes}
                        style={styles.gridView}
                        keyExtractor={item => item.id_note}
                        renderItem={this._renderItem}
                    />

                    <Fab
                        direction="up"
                        onPress={() => this.props.navigation.navigate('AddNote')}
                        containerStyle={{}}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight">
                        <Icon name="add" type='Ionicons' />
                    </Fab>
                </View>
            </>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    root: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})