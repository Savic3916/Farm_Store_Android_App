import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';

export default function Tab({ children, onPress, pressed }) {
  return (
    <Pressable onPress={onPress}>
        <View style={styles.tabView}>
            <Text style={{ 
                        color: pressed? Colors.primary300 : Colors.primary100,
                        fontSize: pressed? 18 : 15,
                        fontWeight: 'bold',
                        fontFamily: 'Maven',
                    }}>
                    {children}
            </Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    tabView: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingRight: 15,
    }

})