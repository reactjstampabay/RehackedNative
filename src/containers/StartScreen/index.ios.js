import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dimensions, Image, KeyboardAvoidingView, LayoutAnimation, StyleSheet, Text, View} from 'react-native';
import {validateProfile} from 'rehacked-common/lib/actions/user';

import Dashboard from '../Dashboard';
import Login from './Login';

class StartScreen extends Component {

  componentWillMount() {
    this.props.dispatch(validateProfile());
  }

  componentWillReceiveProps(nextProps) {
    const {navigator, user} = nextProps;
    if (user.profile && user.profile.status === 'authenticated') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      navigator.replace({title: 'ReHacked Dashboard', component: Dashboard});
    }
  }

  render() {
    const {dispatch, user} = this.props;

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
              <Login dispatch={dispatch} user={user}/>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
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
  },
  welcomeText: {
    fontSize:20,
    color:'#61dafb',
    fontWeight:'300'
  }
});

function mapStateToProps(state) {
  const {user} = state;
  return {user};
}

export default connect(mapStateToProps)(StartScreen);
