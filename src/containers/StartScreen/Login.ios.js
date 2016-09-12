import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';

import {updateLoginField, initiateLogin} from 'rehacked-common/lib/actions/user';

export default ({dispatch, user}) => {
  return (
    <View style={styles.loginContent}>
      <Spinner visible={user.loading} />

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>E M A I L</Text>
        <TextInput keyboardType="email-address"
                   autoCapitalize={'none'}
                   autoCorrect={false}
                   clearButtonMode="while-editing"
                   style={styles.inputText}
                   onChangeText={(text) => dispatch(updateLoginField('email', text))}/>
      </View>

      <View style={styles.inputContainerLast}>
        <Text style={styles.inputLabel}>P A S S W O R D</Text>
        <TextInput style={styles.inputText}
                   onChangeText={(text) => dispatch(updateLoginField('password', text))}
                   secureTextEntry={true}/>
      </View>

      <View style={styles.spacer}>
        <TouchableOpacity style={styles.loginButton}
                          onPress={() => dispatch(initiateLogin(user.email, user.password))}>
          <Icon name='ios-lock-outline'
                size={27}
                color='#fff'
                style={styles.emailImage}/>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>{'L o g i n'.toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContent: {
    width: Dimensions.get('window').width,
    padding: 0
  },
  inputLabel: {
    color:'#ccc',
    fontWeight:'bold',
    fontSize:10,
    position:'absolute',
    top:-10
  },
  inputContainer: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#eeeeee',
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40
  },
  inputContainerLast: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#eeeeee',
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
    position: 'relative'
  },
  inputText: {
    height: 45,
    color: '#000',
    backgroundColor: 'transparent',
    fontSize: 14
  },
  emailImage: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 90,
    top: 8
  },
  spacer: {
    padding: 40,
    paddingTop: 40
  },
  loginButton: {
    backgroundColor: '#00D8FF',
    padding: 15,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 30,
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
