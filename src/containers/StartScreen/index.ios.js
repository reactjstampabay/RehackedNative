import React from 'react';
import {Dimensions, Image, KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import Login from './Login';

export default () => {
  return (
    <KeyboardAvoidingView style={styles.keyboard} behavior="position">
      <View style={styles.wrapper}>
        <View style={styles.scrollContainer}>
          <View style={styles.splashImageContainer}>
            <Image style={styles.splashImage}
                   source={{uri: "https://cdn.auth0.com/blog/react-js/react.png"}}/>
            <Text style={styles.welcomeText}>React Native Rehacked</Text>
          </View>

          <View style={styles.content}>
            <Login/>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

var windowSize = Dimensions.get('window');
var styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0
  },
  keyboard: {
    flex: 1,
    height: windowSize.height,
    width: windowSize.width
  },
  wrapper: {
    backgroundColor: "#fff",
    height: windowSize.height
  },
  scrollContainer: {
    width: windowSize.width,
    flex: 1
  },
  splashImageContainer: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  splashImage: {
    width: windowSize.width / 1.5,
    marginTop:40,
    height:windowSize.width / 1.5
    // height: windowSize.width === 414 ? 400 : windowSize.width === 375 ? 330 : 255,
  },
  welcomeText: {
    fontSize:20,
    color:'#61dafb',
    fontWeight:'300'
  }
});
