import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react';

import PopularItem from '../UI/PopularItem';
import EmptyTabView from '../component/EmptyTabView';
import { useSelector } from 'react-redux';

export default function Discounts() {

  const fruits = useSelector((state) => state.fruitObject.furitsDetails);
  
  // filter the redux state based on where tabs == 'discount'
  const discountFruits = fruits.filter((fruits) => fruits.tab.includes('discount'));

  if(discountFruits.length <= 0){
    return <EmptyTabView/>;
  };

  return (
    <View>
      <FlatList 
        data={discountFruits}
        renderItem={(itemData) => 
                            <PopularItem
                                        id={itemData.item.id} 
                                        cardColor={itemData.item.cardColor} 
                                         bottomCardColor={itemData.item.bottomCardColor} 
                                         name={itemData.item.name} 
                                         price={itemData.item.price} 
                                         link={itemData.item.link}
                                         tab={itemData.item.tab}
                                         description={itemData.item.description}
                            />}
        key={(item) => item.id}
        horizontal={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({})