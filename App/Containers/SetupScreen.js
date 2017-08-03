import React, { Component } from 'react'
import { connect } from 'react-redux'
import SurveyActions from '../Redux/SurveyRedux'
import { ScrollView, Text, Image, View, Slider, Button } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/ScreenStyles'

class SetupScreen extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit() {
    // info
    let hr = 8;
    let min = 30;
    let setupInfo = {
      id: 10,
      eveningSurveyTime: new Date(1970, 1, 1, hr, min),
    };

    this.props.saveSetupInfo(setupInfo);
    this.props.navigation.navigate('EndScreen', { from: 'setup' });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.setupHeader} >
          <Text style={styles.setupHeaderText}>
            Welcome to the Sampling App. We need to collect a little info to set things up.
          </Text>
        </View>
        <View style={styles.setupBody} >
          <View style={styles.setupQuestionContainer}>
            <Text style={styles.setupQuestionText}>When is your bedtime?</Text>
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
            title="Submit"
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
  saveSetupInfo: () => {
    console.tron.log({ message: 'in save setup' })
    //dispatch(SurveyActions.submitSurveyRequest());
  }
})

export default connect(null, mapDispatchToProps)(SetupScreen)
