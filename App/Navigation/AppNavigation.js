import { StackNavigator } from 'react-navigation'
import SplashScreen from '../Containers/SplashScreen'
import Question1Screen from '../Containers/Question1Screen'
import Question2Screen from '../Containers/Question2Screen'
import Question3Screen from '../Containers/Question3Screen'
import Question4Screen from '../Containers/Question4Screen'
import EndScreen from '../Containers/EndScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  Question1Screen: {
    //path: "question/:id",
    screen: Question1Screen
  },
  Question2Screen: {
    //path: "question/:id",
    screen: Question2Screen
  },
  Question3Screen: {
    //path: "question/:id",
    screen: Question3Screen
  },
  Question4Screen: {
    //path: "question/:id",
    screen: Question4Screen
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
