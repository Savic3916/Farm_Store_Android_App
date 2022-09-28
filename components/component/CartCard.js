import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';
import Pre_OrderInnerCard from '../UI/Pre_OrderInnerCard';
import CartCounter from './CartCounter';

export default function CartCard({ id, link, name, price, quantity }) {

  const shortenName = name.length > 12? name.slice(0, 12) + '...' : name;

  return (
    <View style={styles.cartCard}>
          <Pre_OrderInnerCard link={link}/>
              <View style={styles.cardInnerView}>
                  <Text style={styles.nameText}> { shortenName } </Text>
                  <Text style={styles.categoryText}> ${ price } </Text>
              </View>
              <View style={styles.incrementDecrementView}>
                  <CartCounter id={id} quantity={quantity}/>
              </View>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    cartCard: {
        flexDirection: 'row',
        marginVertical: 5,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary50,
        borderRadius: deviceWidth < 360? 18 : 23,
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
        height: '70%',
      },
      nameText: {
        fontFamily: 'Maven',
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.primary300,
      },
      categoryText: {
        marginTop: 7,
        fontFamily: 'Maven',
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.borderColorGray100,
      },
      incrementDecrementView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: '30%',
        height: '60%',
      },
})