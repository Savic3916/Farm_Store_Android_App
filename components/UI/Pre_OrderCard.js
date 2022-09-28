import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';
import Pre_OrderInnerCard from './Pre_OrderInnerCard';
import { useNavigation } from '@react-navigation/native';

export default function Pre_OrderCard({ id, name, price, category, link, tab, cardColor, description, quantity }) {

  const navigation = useNavigation();

  return (
    <View >
      <Pressable 
                style={({pressed}) => pressed? [styles.card, styles.pressed]: styles.card}
                onPress={() => navigation.navigate('Preview', 
                                                          {
                                                            id: id,
                                                            tab: tab, 
                                                            link: link, 
                                                            cardColor: cardColor, 
                                                            name: name, 
                                                            description: description,
                                                            price: price,
                                                            quantity: quantity,
                                                          })}
      >
          <Pre_OrderInnerCard link={link} cardColor={cardColor}/>
          <View style={styles.cardInnerView}>
            <Text style={styles.nameText}> { name } </Text>
            <Text style={styles.categoryText}> { category } </Text>
          </View>
          <View style={styles.priceTextView}>
            <Text style={styles.priceText}> ${ price } </Text>
          </View>
      </Pressable>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    pressed: {
      opacity: 0.75,
    },
    card: {
        flexDirection: 'row',
        marginVertical: 5,
        padding: 10,
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderColor: Colors.primary50,
        borderRadius: deviceWidth < 360? 17 : 20,
        width: '100%',
        height: deviceWidth < 360? 75 : 90,
        elevation: 2,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    cardInnerView: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginLeft: 10,
      width: '40%',
      height: '60%',
    },
    nameText: {
      fontFamily: 'Maven',
      fontSize: 15,
      fontWeight: 'bold',
      color: Colors.primary300,
    },
    categoryText: {
      fontFamily: 'Maven',
      fontSize: 12,
      fontWeight: 'bold',
      color: Colors.borderColorGray100,
    },
    priceTextView: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      width: '30%',
      height: '60%',
    },
    priceText: {
      fontFamily: 'Maven',
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.primary100,
    }
})