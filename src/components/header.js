import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export class AppBar extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: 'light' }}>
                <Left>
                    <Button transparent>
                        <Icon name='ios-menu' style={{ color: '#000000' }} type='Ionicons' />
                    </Button>
                </Left>
                <Body>
                    <Title style={{ color: '#000000' }}>NoteApp</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='funnel' style={{ color: '#000000' }} type='Ionicons' />
                    </Button>
                </Right>
            </Header>
        )
    }
}

export default AppBar
