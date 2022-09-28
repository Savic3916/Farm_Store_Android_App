import { StyleSheet, Pressable, Text, View, Dimensions } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';
import { useSelector } from 'react-redux';

export default function CartCounterHompageCard({ onPress, children }) {

  // get the cart REDUX object
  const cartFruits = useSelector((state) => state.fruitObject.cartFruits);

  // loop through the cartFruits to get the quantity and add them
  const totalCartItem = cartFruits.reduce((sum, fruit) => {
    return sum + fruit.quantity;
  }, 0);


  return (
    <Pressable onPress={onPress}>
        <View style={styles.container}>
          {children}
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>{ totalCartItem }</Text>
        </View>
   </Pressable>

  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
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
    backgroundColor: Colors.primary100,
    position: 'relative',
  },
  textView: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -9,
    right: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
})