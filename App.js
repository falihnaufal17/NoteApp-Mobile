import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Splash from './src/screens/splash/splash';
import Home from './src/screens/home/home';
import MainNavigation from './src/navigations/mainNavigation'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: <Splash />
    }
  }

  componentWillMount = async () => {
    await setTimeout(() => {
      this.setState({
        view: <MainNavigation />
      })
    }, 1500)
  }

  render() {
    return (
      <>
        {
          this.state.view
        }
      </>
    )
  }
}

export default App
