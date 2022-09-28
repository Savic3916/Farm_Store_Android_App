import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';

import PopularItem from '../UI/PopularItem';
import EmptyTabView from '../component/EmptyTabView';
import { useSelector } from 'react-redux';

export default function Popular() {
  
  // my redux objects
    const fruits = useSelector((state) => state.fruitObject.furitsDetails);

    // filter the redux state based on where tabs == 'popular'
    const popularFruits = fruits.filter((fruits) => fruits.tab.includes('popular'));
    
    if(popularFruits.length <= 0){
      return <EmptyTabView/>;
    }
    
  return (
    <View>
      <FlatList
        data={popularFruits}
        renderItem={(itemData) => 
                          <PopularItem 
                                       id={itemData.item.id}
                                       name={itemData.item.name}
                                       price={itemData.item.price} 
                                       link={itemData.item.link}
                                       cardColor={itemData.item.cardColor}
                                       bottomCardColor={itemData.item.bottomCardColor}
                                       tab={itemData.item.tab}
                                       description={itemData.item.description}
                          />}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({})