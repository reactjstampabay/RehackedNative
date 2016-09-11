import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default () => {
  return (
    <View style={[styles.tabContent, {backgroundColor: '#3b5998'}]}>
      <View>
        <Text style={styles.tabText}>Camera Tab</Text>
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
    color: 'white',
    margin: 50,
    fontSize: 40
  }
});
