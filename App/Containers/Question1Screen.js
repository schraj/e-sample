import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { ScrollView, Text, Image, View, Slider, Button } from 'react-native'
import { Images } from '../Themes'


// Styles
import styles from './Styles/ScreenStyles'

class Question1Screen extends Component {
  getDefaultProps() {
    return {
      value: 1,
    }
  }

  getInitialState() {
    return {
      value: this.props.value,
    };
  }

  submit() {
    console.log('submitting form')
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
          <Slider style={styles.slider}
            {...this.props }
            minimumValue={1}
            maximumValue={100}
            step={1}
            onValueChange={(value) => this.setState({ value: value })}
          />
          <Button
            style={styles.nextButton}
            onPress={this.submit}
            onPress={() => this.props.navigation.navigate('Question2Screen')}
            title="Next"
          />
        </View>
      </View>
    )
  }
}
export default reduxForm({
  form: 'test'
})(Question1Screen)