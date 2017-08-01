import { StackNavigator } from 'react-navigation'
import SplashScreen from '../Containers/SplashScreen'
import QuestionScreen from '../Containers/QuestionScreen'
import EndScreen from '../Containers/EndScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  QuestionScreen: {
    path: "QuestionScreen/:id",
    screen: QuestionScreen
  },
  EndScreen: {
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
