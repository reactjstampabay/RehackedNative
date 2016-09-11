import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {updateLoginField, initiateLogin} from 'rehacked-common/lib/actions/user';

export default ({dispatch, user}) => {
  return (
    <View style={styles.loginContent}>
      <View style={styles.inputContainer}>
        <Icon name='ios-mail-outline'
              size={25}
              color='#ccc'
              style={styles.emailImage}/>

        <TextInput keyboardType="email-address"
                   autoCapitalize={'none'}
                   autoCorrect={false}
                   placeholder="Email"
                   placeholderTextColor="#20252b"
                   clearButtonMode="while-editing"
                   style={styles.inputText}
                   onChangeText={(text) => dispatch(updateLoginField('email', text))}/>
      </View>

      <View style={styles.inputContainerLast}>
        <Icon name='ios-lock-outline'
              size={25}
              color='#ccc'
              style={styles.lockImage}/>

        <TextInput placeholder="Password"
                   placeholderTextColor="#20252b"
                   style={styles.inputText}
                   onChangeText={(text) => dispatch(updateLoginField('password', text))}
                   secureTextEntry={true}/>
      </View>

      <View style={styles.spacer}>
        <TouchableOpacity style={styles.loginButton}
                          onPress={() => dispatch(initiateLogin(user.email, user.password))}>
          <Text style={{color: '#000'}}>Login</Text>
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
  inputContainer: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#4d667e',
    marginBottom: 0
  },
  inputContainerLast: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#4d667e',
    marginBottom: 30,
    position: 'relative'
  },
  inputText: {
    height: 50,
    color: '#fff',
    backgroundColor: 'transparent',
    paddingLeft: 45,
    fontSize: 14
  },
  emailImage: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 10,
    top: 12
  },
  lockImage: {
    position: 'absolute',
    left: 10,
    top: 12,
    width: 25,
    height: 25
  },
  spacer: {
    padding: 20,
    paddingTop: 40
  },
  loginButton: {
    backgroundColor: '#00D8FF',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: .2,
    shadowOffset: {height: 5},
    shadowRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    width: window.width - 40
  }
});
