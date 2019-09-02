import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { withNavigation } from 'react-navigation'
import axios from 'axios'
import url from '../../Api';

export class AppBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
    }
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref
    }

    hideMenu = () => {
        this._menu.hide()
    }

    showMenu = () => {
        this._menu.show()
    }

    componentDidMount = async () => {
        await this.getNoteAscending()
        await this.getNoteDescending()
    }

    getNoteAscending() {
        axios.get(`${url}/notes`)
            .then((res) => {
                this.setState({
                    notes: res.data.result
                })
            })
            .catch((error) => {
                alert('oops something wrong!')
            })
    }

    getNoteDescending() {
        axios.get(`${url}/notes/desc`)
            .then((res) => {
                this.setState({
                    notes: res.data.result
                })
            })
            .catch((error) => {
                alert('oops something wrong!')
            })
    }

    render() {
        return (
            <Header style={{ backgroundColor: 'light' }}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='ios-menu' style={{ color: '#000000' }} type='Ionicons' />
                    </Button>
                </Left>
                <Body>
                    <Title style={{ color: '#000000' }}>NoteApp</Title>
                </Body>
                <Right>
                    <Menu
                        style={{ flex: 1, alignSelf: 'flex-end' }}
                        ref={this.setMenuRef}
                        button={<Text onPress={this.showMenu}><Icon name='funnel' style={{ color: '#000000' }} type='Ionicons' /></Text>}
                    >
                        <MenuItem onPress={this.hideMenu}>ASCENDING</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={this.hideMenu}>DESCENDING</MenuItem>
                    </Menu>
                </Right>
            </Header>
        )
    }
}

export default withNavigation(AppBar)
