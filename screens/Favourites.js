import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

import Colors from '../constants/Colors';
import Pre_OrderCard from '../components/UI/Pre_OrderCard';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function Favourites() {

  // setting options dynamically
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitleStyle: {fontSize: 20, fontWeight: 'bold', fontFamily: 'Maven', color: '#1B0B43'}
    });
  }, [navigation]);

  
  const fruits = useSelector((state) => state.fruitObject.furitsDetails);
  const favouriteFruitsID = useSelector((state) => state.fruitObject.favouriteFruits);

  const favouriteFruits = fruits.filter((fruit) => favouriteFruitsID.includes(fruit.id));

  if(favouriteFruitsID.length === 0 || favouriteFruits.length === 0){
    return(
      <View style={styles.container}>
        <Text style={styles.text}> There are no favourite fruits yet </Text>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={favouriteFruits}
        renderItem={(itemData) => <Pre_OrderCard
                                      id={itemData.item.id}
                                      name={itemData.item.name} 
                                      category={itemData.item.category} 
                                      price={itemData.item.price} 
                                      link={itemData.item.link} 
                                      tab={itemData.item.tab}
                                      cardColor={itemData.item.cardColor}
                                      description={itemData.item.description}
                                  />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})