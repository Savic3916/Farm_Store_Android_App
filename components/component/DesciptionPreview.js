import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';

import Colors from '../../constants/Colors';
import ModalPopUp from './ModalPopUp';
import EmptyLittleCards from '../UI/EmptyLittleCards';
import { FontAwesome } from '@expo/vector-icons';

export default function DesciptionPreview({ id, name, description }) {

  const [modalOn, setModalOn] = useState(false);

  const turnModalOn = () => {
    setModalOn(!modalOn);
  };
  const turnModalOff = () => {
    setModalOn(false);
  };

  return (
    <View style={styles.container}>
        <View style={styles.nameTextContainer}>
            <Text style={styles.nameText}>{ name }</Text>
            <EmptyLittleCards onPress={turnModalOn}>
                <FontAwesome name="ellipsis-v" size={24} color="#1B0B43" />
            </EmptyLittleCards>
        </View>
        <ModalPopUp modalOn={modalOn} modalOff={turnModalOff} id={id}/>
        <Text style={styles.commentText}>Juicy and delicious </Text>
        <Text style={styles.descriptionText}>{ description }</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        paddingVertical: 0,
    },
    nameTextContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: deviceWidth < 360? 20 : 25,
        fontFamily: 'Maven',
        color: Colors.primary300,
    },
    commentText: {
        color: Colors.borderColorGray100,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descriptionText: {
        color: Colors.primary300,
        fontSize: deviceWidth < 360? 12 : 15,
        fontWeight: 'bold',
    }
})