import { StackNavigator } from 'react-navigation'
import SingleProductScreen from '../Containers/SingleProductScreen'
import ApproveProductScreen from '../Containers/ApproveProductScreen'
import ViewSalesScreen from '../Containers/ViewSalesScreen'
import ViewProductScreen from '../Containers/ViewProductScreen'
import AddCustomerScreen from '../Containers/AddCustomerScreen'
import ViewCustomersScreen from '../Containers/ViewCustomersScreen'
import DashboardScreen from '../Containers/DashboardScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
// import addCustomerScreen from '../Containers/addCustomerScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SingleProductScreen: { screen: SingleProductScreen },
  ApproveProductScreen: { screen: ApproveProductScreen },
  ViewSalesScreen: { screen: ViewSalesScreen },
  ViewProductScreen: { screen: ViewProductScreen },
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
