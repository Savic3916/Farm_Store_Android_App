import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';

export default function PlusMinusBox({ children, onPress }) {
  return (
    <View>
        <Pressable onPress={onPress}
                style={({pressed}) => pressed? [styles.container, styles.pressed]: styles.container}>
            <Text>{children}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 3,
        paddingVertical: 2, 
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: Colors.primary300,
        opacity: 0.4,
        marginHorizontal: 5,
    },
    pressed: {
        opacity: 0.5
    }
})