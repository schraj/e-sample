import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/ScreenStyles'

export default class EndScreen extends Component {
  constructor(props) {
    super(props);
    //console.tron.log({ message: 'in constructor', object: props });
    this.from = props.navigation.state.params.from;
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={[styles.h1, styles.title]}>
              End of {this.from === 'survey' ? 'Survey' : 'Setup'}
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
