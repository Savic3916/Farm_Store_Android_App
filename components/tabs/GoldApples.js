import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import EmptyTabView from '../component/EmptyTabView';
import { useSelector } from 'react-redux';

export default function GoldApples() {

  // my redux objects
  const fruits = useSelector((state) => state.fruitObject.furitsDetails);
  
  // filter the redux state based on where tabs == 'gold-apples'
  const goldAppleFruits = fruits.filter((fruits) => fruits.tab.includes('gold-apples'));
  
  if(goldAppleFruits.length <= 0){
    return <EmptyTabView/>;
  };

  return (
    <View>
      <Text>GoldApples</Text>
    </View>
  )
}

const styles = StyleSheet.create({})