import { Pressable, StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';

export default function EmptyLittleCards({ children, onPress }) {
  return (
    <Pressable onPress={onPress}>
        <View style={styles.container}>
          {children}
        </View>
    </Pressable>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        width: deviceWidth < 360? 30 : 40,
        height: deviceWidth < 360? 30 : 40,
        borderRadius: deviceWidth < 360? 6 : 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        backgroundColor: 'white'
    }
})