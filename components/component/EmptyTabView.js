import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';

export default function EmptyTabView() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> This tab has no fruit yet. </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary300,
    }
});