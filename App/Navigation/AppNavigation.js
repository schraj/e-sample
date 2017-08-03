import { StackNavigator } from 'react-navigation'
import SplashScreen from '../Containers/SplashScreen'
import SetupScreen from '../Containers/SetupScreen'
import QuestionScreen from '../Containers/QuestionScreen'
import EndScreen from '../Containers/EndScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  SetupScreen: {
    screen: SetupScreen
  },
  QuestionScreen: {
    path: "QuestionScreen/:id",
    screen: QuestionScreen
  },
  EndScreen: {
    path: "EndScreen/:from",
    screen: EndScreen
  }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'SplashScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default PrimaryNav
