import { StyleSheet, Image, View, Dimensions } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';

export default function Pre_OrderInnerCard({ link }) {
  return (
    <View style={styles.photoCard}>
        <Image style={styles.image} source={{ uri: link }} resizeMode='cover'/>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    photoCard: {
        flex: 1,
        height: '85%',
        borderRadius: deviceWidth < 360? 15 : 20,
        borderWidth: 1,
        borderColor: Colors.primary50,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        width: '90%',
        height: '20%',
    },
})