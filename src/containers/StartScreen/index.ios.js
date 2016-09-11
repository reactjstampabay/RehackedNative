import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dimensions, Image, LayoutAnimation, StyleSheet, Text, View} from 'react-native';

import Dashboard from '../Dashboard';
import Login from './Login';

class StartScreen extends Component {

  componentWillReceiveProps(nextProps) {
    const {navigator, user} = nextProps;
    if (user.status === 'authorized') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      navigator.replace({title: 'ReHacked Dashboard', component: Dashboard});
    }
  }

  render() {
    const {dispatch, user} = this.props;

    return (
      <View style={styles.wrapper}>
        <View style={styles.scrollContainer}>
          <View style={styles.splashImageContainer}>
            <Image style={styles.splashImage}
                   source={{uri: "https://facebook.github.io/react/img/logo_og.png"}}/>
          </View>

          <View style={styles.content}>
            <Login dispatch={dispatch} user={user}/>
          </View>
        </View>
      </View>
    );
  }
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

function mapStateToProps(state) {
  const {user} = state;
  return {user};
}

export default connect(mapStateToProps)(StartScreen);
