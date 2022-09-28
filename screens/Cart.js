import { StyleSheet, View, Text, FlatList } from 'react-native';
import React from 'react';

import CartCard from '../components/component/CartCard';
import Colors from '../constants/Colors';
import TotalCartPrice from '../components/component/TotalCartPrice';
import { useSelector } from 'react-redux';

export default function Cart() {

  // cartFruit REDUX states
  const cartFruits = useSelector((state) => state.fruitObject.cartFruits);

  if(cartFruits.length <= 0){
    return(
      <View style={styles.container}>
        <Text style={styles.text}> Please add a fruit to Cart </Text>
      </View>
    );
  };

  return (
    <View style={styles.cartContainer}>
      <View style={{flex: 3, paddingHorizontal: 5}}>
        <FlatList
          data={cartFruits}
          renderItem={(itemData) => <CartCard
                                        id={itemData.item.id}
                                        name={itemData.item.name}
                                        link={itemData.item.link}
                                        price={itemData.item.price}
                                        quantity={itemData.item.quantity}
                                    />
        }
          keyExtractor={(item) => item.id}
        />
      </View>
      <TotalCartPrice/>
    </View>
  )
}

const styles = StyleSheet.create({
  cartContainer:{
    flex: 1,
    backgroundColor: Colors.primary50,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary50,
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: Colors.primary300,
    textAlign: 'center',
  },
})