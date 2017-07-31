import React, { Component } from 'react'
import { connect } from 'react-redux'
import SaveSurveyActions from '../Redux/SaveSurveyRedux'
import { ScrollView, Text, Image, View, Slider, Button } from 'react-native'
import { Images } from '../Themes'


// Styles
import styles from './Styles/ScreenStyles'

class Question1Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    console.tron.log({ message: 'in submit', object: this.state });
    this.props.saveAnswer(1, this.state.value);
    this.props.navigation.navigate('Question2Screen');
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.questionHeader} >
          <Text style={styles.questionHeaderText}>
            How stressed are you today?
          </Text>
        </View>
        <View style={styles.questionBody} >
          <View style={styles.sliderValues}>
            <Text style={styles.sliderLeftValue}>No Stress</Text>
            <Text style={styles.sliderRightValue}>Extremely Stressed</Text>
          </View>

          <Slider style={styles.slider}
            {...this.props }
            minimumValue={1}
            maximumValue={100}
            maximumTrackTintColor={"#FFF"}
            minimumTrackTintColor={"#FFF"}
            step={1}
            onValueChange={(value) => this.setState({ value: value })}
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

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  saveAnswer: (id, answer) => {
    console.tron.log({ message: 'in save answer', id: id, answer: answer })
    dispatch(SaveSurveyActions.saveAnswer(id, answer));
  }
})

export default connect(null, mapDispatchToProps)(Question1Screen)
