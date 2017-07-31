import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts, Colors, Images } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...Fonts.style,
  ...Colors.silver,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  centered: {
    alignItems: 'center'
  },
  title: {
    color: Colors.silver,
    marginTop: 30
  },
  subTitle: {
    color: Colors.silver,
    marginTop: Metrics.baseMargin,
    marginBottom: 50
  },
  slider: {
    width: 300,
    marginTop: Metrics.baseMargin,
    marginBottom: 50
  },
  nextButton: {
    width: 250,
  },
  questionHeader: {
    flex: 1,
    alignItems: 'center',
  },
  questionHeaderText: {
    ...Fonts.style.h5,
    color: Colors.silver,
    alignItems: 'center',
    marginTop: 100,
  },
  questionBody: {
    flex: 3,
    alignItems: 'center',
  }
})
