import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {logout} from 'rehacked-common/lib/actions/user';

export default ({dispatch, user}) => {
  return (
    <View style={[styles.tabContent, {backgroundColor: '#fff'}]}>
      <View>
        <Text style={styles.tabText}>Home Tab</Text>
      </View>

      <View>
        <Text style={styles.contentText}>Hi, {user.profile.email}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}
                          onPress={() => dispatch(logout())}>
          <Text style={{color: '#fff'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    color: '#61dafb',
    margin: 50,
    fontSize: 40
  },
  contentText: {
    color: '#61dafb',
    fontSize: 20
  },
  buttonWrapper: {
    margin: 50
  },
  button: {
    backgroundColor: '#61dafb',
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
