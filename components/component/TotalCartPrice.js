import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';
import { useSelector } from 'react-redux';

export default function TotalCartPrice() {

    // get cartFruit REDUX array 
    const cartFruits = useSelector((state) => state.fruitObject.cartFruits);

    let sum = 0;
    for(let a = 0; a < cartFruits.length; a++){
        // get quantity 
        const quantity = cartFruits[a]['quantity'];
        // get price
        const price = cartFruits[a]['price'];
        // get the price of this quantity
        const totalOrderedPrice = quantity * price;
        // store totalOrderedPrice in sum
        sum += totalOrderedPrice;
    };

    // let the only shipping price be $3.99
    const shippingPrice = 3.99;
    const priceIncludingShipping = sum + shippingPrice;
    // convert priceIncludingShipping to 2 decimal place
    const priceToTwoDecimal = priceIncludingShipping.toFixed(2);

  return (
    <View style={styles.container}>
      <View style={styles.shippingContainer}>
        <Text style={styles.text}> Shipping </Text>
        <Text style={styles.text}> ${ shippingPrice } </Text> 
      </View>
      <View style={styles.shippingContainer}>
        <Text style={styles.text}> Total </Text>
        <Text style={styles.priceText}> ${priceToTwoDecimal}</Text> 
      </View>
      <View>
        <Pressable 
            onPress={() => console.log('Pressed!')}
            style={({pressed}) => pressed? [styles.button, styles.pressed]: styles.button}
        >
            <Text style={styles.buttonText}> Payment </Text>
        </Pressable>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'transparent'
    },
    shippingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontWeight: 'bold',
        fontFamily: 'Maven',
        fontSize: 18,
    },
    priceText: {
        fontWeight: 'bold',
        fontFamily: 'Maven',
        fontSize: 25,
        color: Colors.primary100
    },
    pressed: {
      opacity: 0.75,
  },
  button: {
      width: '100%',
      height: 50,
      backgroundColor: Colors.primary100,
      borderRadius: 18,
      marginBottom: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 2,
  },
  buttonText: {
      color: 'white',
      fontFamily: 'Maven',
      fontSize: 18,
      fontWeight: 'bold',
  }
})