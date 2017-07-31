import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { ScrollView, Text, Image, View, TouchableOpacity, Slider } from 'react-native'
import { Images } from '../Themes'


// Styles
import styles from './Styles/ScreenStyles'

class Question4Screen extends Component {
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
              How much energy do you have right now?
            </Text>
            <Slider {...this.props}
              onValueChange={(value) => this.setState({ value: value })} />
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
})(Question4Screen)