import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, Image, View, Slider, Button, TextInput } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker';
import SurveyActions from '../Redux/SurveyRedux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/ScreenStyles'

class SetupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      selectedDateTime: null
    };

    this.submit = this.submit.bind(this);
    this.getSelectedTime = this.getSelectedTime.bind(this);
    this.getSelectedTimeAsString = this.getSelectedTimeAsString.bind(this);
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = (date) => {
    this.hideDateTimePicker();
    this.setState({
      selectedDateTime: date
    });
  };

  getSelectedTime() {
    if (this.state.selectedDateTime) {
      const hr = this.state.selectedDateTime.getHours().toString();
      let min = this.state.selectedDateTime.getMinutes().toString();
      if (min.length === 1) {
        min = '0' + min;
      }
      return { hr, min };
    } else {
      return null;
    }
  }

  getSelectedTimeAsString() {
    const timeInfo = this.getSelectedTime();
    if (timeInfo) {
      return `${timeInfo.hr}:${timeInfo.min}`;
    } else {
      return 'Not Set';
    }
  }

  submit() {
    // info
    const timeInfo = this.getSelectedTime();
    let setupInfo = {
      id: 10,
      eveningSurveyHour: timeInfo.hr,
      eveningSurveyMinute: timeInfo.min
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
            App Setup
          </Text>
        </View>
        <View style={styles.setupBody} >
          <View style={styles.setupQuestionContainer}>
            <Text style={styles.setupQuestionText}>Your participant id:</Text>
            <TextInput style={styles.setupQuestionTextInput} />
          </View>
          <View style={styles.setupQuestionContainer}>
            <Text style={styles.setupQuestionText}>When is your bedtime?</Text>
            <Text style={styles.setupQuestionText}>{this.getSelectedTimeAsString()}</Text>
            <Button title="Click To Set" onPress={this.showDateTimePicker} />
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
              mode={'time'}
              datePickerModeAndroid={'spinner'}
              data={this.state.selectedDateTime}
            />
          </View>

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
