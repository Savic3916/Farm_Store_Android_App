import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import EmptyTabView from '../component/EmptyTabView';
import { useSelector } from 'react-redux';

export default function SunGrapes() {

  // my redux objects
  const fruits = useSelector((state) => state.fruitObject.furitsDetails);
  
  // filter the redux state based on where tabs == 'gold-apples'
  const sungrapesFruits = fruits.filter((fruits) => fruits.tab.includes('sun-grapes'));
  
  if(sungrapesFruits.length <= 0){
    return <EmptyTabView/>;
  };

  return (
    <View>
      <Text>SunGrapes</Text>
    </View>
  )
}

const styles = StyleSheet.create({})