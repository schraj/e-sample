import React, { Component } from 'react'
import { connect } from 'react-redux'
import SurveyActions from '../Redux/SurveyRedux'
import { ScrollView, Text, Image, View, Slider, Button } from 'react-native'
import { Images } from '../Themes'


// Styles
import styles from './Styles/ScreenStyles'

const questions = [
  { id: 1, left: 'No Stress', right: 'Extremely Stressed', question: 'How stressed are you right now?' },
  { id: 2, left: 'Anxious', right: 'Calm', question: 'How do you feel right now?' },
  { id: 3, left: 'No energy', right: 'Lots of energy', question: 'How much energy do you have right now?' },
]

class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    //console.tron.log({ message: 'in constructor', object: props });
    const questionId = props.navigation.state.params.id;
    this.questionObject = questions.find(q => q.id == questionId);
    this.state = {
      questionId,
      answer: 1,
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    console.tron.log({ message: 'in submit', object: this.state });
    this.props.saveAnswer(this.state.questionId, this.state.answer);
    if (this.state.questionId === questions.length) {
      this.props.submitResults();
      this.props.navigation.navigate('EndScreen');
    } else {
      this.props.navigation.navigate('QuestionScreen', { id: this.state.questionId + 1 });
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.questionHeader} >
          <Text style={styles.questionHeaderText}>
            {this.questionObject.question}
          </Text>
        </View>
        <View style={styles.questionBody} >
          <View style={styles.sliderValues}>
            <Text style={styles.sliderLeftValue}>{this.questionObject.left}</Text>
            <Text style={styles.sliderRightValue}>{this.questionObject.right}</Text>
          </View>

          <Slider style={styles.slider}
            minimumValue={1}
            maximumValue={100}
            maximumTrackTintColor={"#FFF"}
            minimumTrackTintColor={"#FFF"}
            step={1}
            onValueChange={(value) => this.setState({ answer: value })}
          />
          <Button
            style={styles.nextButton}
            onPress={() => { this.submit(); }}
            title="Next"
          />
          <Button
            style={styles.nextButton}
            onPress={() => this.props.navigation.navigate('SplashScreen')}
            title="Back"
          />

        </View>
        <View style={{ flex: 1 }}>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveAnswer: (id, answer) => {
    console.tron.log({ message: 'in save answer', id: id, answer: answer })
    dispatch(SurveyActions.saveAnswer(id, answer));
  },
  submitResults: () => {
    console.tron.log({ message: 'in submit results' })
    dispatch(SurveyActions.saveSurveyRequest());
  }
})

export default connect(null, mapDispatchToProps)(QuestionScreen)
