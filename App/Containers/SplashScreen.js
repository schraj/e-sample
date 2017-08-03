import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/ScreenStyles'

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    //console.tron.log({ message: 'in constructor', object: props });
    const hasParticipantInfo = props.participantInfo
      && props.participantInfo.participantId
      && props.participantInfo.eveningSurveyTime;
    this.state = {
      hasParticipantInfo
    };
  }

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
            {!this.state.hasParticipantInfo &&
              <View>
                <Text style={styles.setupHeaderText}>
                  Welcome to the Sampling App. We need to collect a little info to set things up.
                </Text>
                <Button
                  onPress={() => this.props.navigation.navigate('SetupScreen')}
                  title="Go To Setup Questions"
                />
              </View>
            }

            {this.state.hasParticipantInfo &&
              <View>
                <Text style={styles.setupHeaderText}>
                  Please answer the following three questions.
                </Text>
                <Button
                  onPress={() => this.props.navigation.navigate('QuestionScreen', { id: 1 })}
                  title="Go To Questions"
                />
              </View>
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    participantInfo: state.participantInfo
  };
};

export default connect(mapStateToProps, null)(SplashScreen);