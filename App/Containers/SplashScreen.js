import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/ScreenStyles'

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={[styles.h1, styles.title]}>
              E-Sample
            </Text>
            <Text style={[styles.h5, styles.subTitle]}>
              Momentary Experience Sampler
            </Text>
            <Button
              onPress={() => this.props.navigation.navigate('Question1Screen')}
              title="Go To Questions"
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
