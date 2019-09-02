import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Form, Item, Input, Content, List, ListItem, Picker, Card } from 'native-base';
import axios from 'axios';
import url from '../../../Api';

export class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: this.props.navigation.getParam('data'),
            categories: [],
            category: 1,
            title: '',
            description: ''
        };
    }
    onValueChange(value) {
        this.setState({
            category: value
        });
    }

    editNote = async (id_note, data) => {
        await axios.patch(`${url}/notes/${id_note}`, data)
            .then(() => {
                Alert.alert('Edit Note Success!')
                this.props.navigation.navigate('Home')
            })
            .catch((error) => {
                console.warn(error)
                Alert.alert('Failed!')
            })
    }

    componentDidMount = async () => {
        await this.getCategories()
        await this.setState({
            title: this.state.note.title,
            description: this.state.note.description,
            category: this.state.note.id_category
        })
    }

    getCategories() {
        axios.get(`${url}/categories`)
            .then((res) => {
                console.warn('response: ', res.data)
                this.setState({ categories: res.data.result })
            })
            .catch((error) => {
                console.warn('error: ', error)
            })
    }

    render() {
        let { categories, title, description, category, note } = this.state
        console.warn('categories: ', categories)

        let data = {
            title: title,
            description: description,
            id_category: category
        }
        return (
            <Container>
                <Header style={{ backgroundColor: 'light' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-round-back' style={{ color: '#000000' }} type='Ionicons' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: '#000000', textAlign: 'center', alignSelf: 'center' }}>EDIT NOTE</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.editNote(note.id_note, data)}>
                            <Icon name='ios-checkmark-circle-outline' style={{ color: '#000000' }} type='Ionicons' />
                        </Button>
                    </Right>
                </Header>
                <Form>
                    <List>
                        <ListItem>
                            <Input placeholder="ADD TITLE ..." placeholderTextColor="#c4c4c4" onChangeText={title => this.setState({ title })} value={title} />
                        </ListItem>
                        <ListItem style={{ height: 190 }}>
                            <Input placeholder="ADD DESCRIPTION ..." placeholderTextColor="#c4c4c4" onChangeText={description => this.setState({ description })} value={description} />
                        </ListItem>
                        <ListItem>
                            <Text>CATEGORY</Text>
                        </ListItem>
                        <ListItem>
                            <Card style={{ width: '100%' }}>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={{ width: '100%' }}
                                    selectedValue={this.state.category}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    {
                                        categories.map((item, key) => {
                                            return (
                                                <Picker.Item label={item.name} value={item.id_category} />
                                            )
                                        })
                                    }
                                </Picker>
                            </Card>
                        </ListItem>
                    </List>
                </Form>
            </Container>
        )
    }
}

export default EditNote
