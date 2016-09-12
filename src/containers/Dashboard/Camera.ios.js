import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Camera from 'react-native-camera';

export default () => {
  let camera = null;

  const takePicture = () => {
    camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={(cam) => {
          camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>

        <TouchableHighlight style={styles.takePictureWrapper}
                            onPress={takePicture}>
          <View style={styles.takePicture}/>
        </TouchableHighlight>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  takePicture: {
    backgroundColor: '#61dafb',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  takePictureWrapper: {
    backgroundColor: '#02c0ef',
    borderRadius: 40,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 60
  }
});
