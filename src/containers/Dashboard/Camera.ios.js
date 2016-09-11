import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default () => {
  return (
    <View style={[styles.tabContent, {backgroundColor: '#3b5998'}]}>
      <View>
        <Text style={styles.tabText}>One day I'll be a real Camera!</Text>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  tabText: {
    color: 'white',
    fontSize: 25
  }
});
