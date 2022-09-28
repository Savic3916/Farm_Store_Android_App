import { Pressable, StyleSheet } from 'react-native';
import React from 'react';

export default function Icons({ onPress, children }) {
  return (
    <Pressable style={({pressed}) => pressed && styles.whenPressed} onPress={onPress}>
        {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    whenPressed: {
        opacity: 0.5,
    },
})