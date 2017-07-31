import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { ScrollView, Text, Image, View, TouchableOpacity, Slider } from 'react-native'
import { Images } from '../Themes'


// Styles
import styles from './Styles/ScreenStyles'

class Question2Screen extends Component {
  submit() {
    console.log('submitting form')
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={[styles.h5, styles.subTitle]}>
              How do you feel right now?
            </Text>
            <TouchableOpacity onPress={this.submit}>
              <Text style={styles.button}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default reduxForm({
  form: 'test'
})(Question2Screen)