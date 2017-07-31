import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/ScreenStyles'

export default class EndScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={[styles.h1, styles.title]}>
              End of Survey
            </Text>
            <Text style={[styles.h5, styles.subTitle]}>
              Thanks! You can close the app now.
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
