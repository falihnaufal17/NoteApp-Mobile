import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import Home from '../screens/home/home';
import Drawer from '../components/drawer'

const stackNavigation = createStackNavigator({
    Home: {
        screen: Home,
    }
},
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    })

const DrawerNavigator = createDrawerNavigator({
    stackNavigation,
}, {
        contentComponent: Drawer,
        drawerBackgroundColor: 'rgba(255,255,255,0.9)',
        overlayColor: 'rgba(0,0,0,0.7)',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae',
        }
    })

export default createAppContainer(DrawerNavigator)