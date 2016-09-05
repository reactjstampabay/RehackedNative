import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Login from './Login';

export default () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.scrollContainer}>
        <View style={styles.splashImageContainer}>
          <Image style={styles.splashImage}
                 source={{uri: "https://facebook.github.io/react/img/logo_og.png"}}/>
        </View>

        <View style={styles.content}>
          <Login/>
        </View>
      </View>
    </View>
  );
}

var windowSize = Dimensions.get('window');
var styles = StyleSheet.create({
  content: {
    backgroundColor: '#384a5b',
    position: 'absolute',
    bottom: 40
  },
  wrapper: {
    backgroundColor: "#384a5b",
    height: windowSize.height
  },
  scrollContainer: {
    width: windowSize.width,
    flex: 1
  },
  splashImageContainer: {
    position: 'absolute'
  },
  splashImage: {
    width: windowSize.width,
    height: windowSize.width === 414 ? 400 : windowSize.width === 375 ? 330 : 255,
  }
});
