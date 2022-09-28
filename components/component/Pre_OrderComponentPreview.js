import { ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';

export default function Pre_OrderComponentPreview({image, children}) {
  return (
      <View style={styles.container}>
      <ImageBackground source={{uri: image}} resizeMode='cover' style={styles.image}>
          {children}
      </ImageBackground>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingTop: 50,
  }
})