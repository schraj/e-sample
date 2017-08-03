import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts, Colors, Images } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...Fonts.style,
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
  splashDescription: {
    ...Fonts.style.h5,
    color: Colors.silver,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    width: 300
  },
  slider: {
    width: 300,
    marginTop: Metrics.baseMargin,
    marginBottom: 50
  },
  sliderValues: {
    flexDirection: 'row',
  },
  sliderLeftValue: {
    paddingLeft: 50,
    flex: 1,
    color: Colors.silver,
  },
  sliderRightValue: {
    paddingLeft: 150,
    flex: 1,
    color: Colors.silver,
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
  },
  setupHeader: {
    flex: 1,
    alignItems: 'center',
  },
  setupHeaderText: {
    ...Fonts.style.h1,
    color: Colors.silver,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    width: 300
  },
  setupBody: {
    flex: 3,
    alignItems: 'center',
  },
  setupQuestionContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 50
  },
  setupQuestionTextInput: {
    marginTop: 15,
    backgroundColor: Colors.silver,
    width: 200,
  },
  setupQuestionText: {
    ...Fonts.style.h5,
    color: Colors.silver,
    alignItems: 'center',
  },
})
