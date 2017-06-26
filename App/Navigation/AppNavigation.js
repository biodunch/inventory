import { StackNavigator } from 'react-navigation'
import AddCustomerScreen from '../Containers/AddCustomerScreen'
import ViewCustomersScreen from '../Containers/ViewCustomersScreen'
import DashboardScreen from '../Containers/DashboardScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
// import addCustomerScreen from '../Containers/addCustomerScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  AddCustomerScreen: { screen: AddCustomerScreen },
  ViewCustomersScreen: { screen: ViewCustomersScreen },
  DashboardScreen: { screen: DashboardScreen },
  LaunchScreen: { screen: LaunchScreen },
  // AddCustomerScreen: { screen : addCustomerScreen },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { title: 'Login' }
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
