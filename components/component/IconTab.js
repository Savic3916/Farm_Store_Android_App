import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

export default function IconTab({ onPress, name, title}) {
    return (
        <View>
          <Pressable onPress={onPress}
            style={({pressed}) => pressed? [styles.singleIconView, styles.pressed] : styles.singleIconView}
          >
            <MaterialIcons name={name} size={24} color="#1B0B43" />
            <Text style={styles.singleIconText}> {title} </Text>
          </Pressable>
        </View>
  )
}

const styles = StyleSheet.create({
    singleIconView: {
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      pressed: {
        opacity: 0.5,
      },
      singleIconText: {
        fontFamily: 'Maven',
        fontWeight: 'bold',
        fontSize: 15,
        color: Colors.primary300,
        marginLeft: 10,
      }
})