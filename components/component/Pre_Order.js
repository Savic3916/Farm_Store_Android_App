import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';
import Pre_OrderCard from '../UI/Pre_OrderCard';
import EmptyTabView from '../component/EmptyTabView';
import { useSelector } from 'react-redux';

export default function Pre_Order() {

  const fruits = useSelector((state) => state.fruitObject.furitsDetails);

  // filter the redux state based on where tabs == 'pre-order'
  const preOrderFruits = fruits.filter((fruits) => fruits.tab.includes('pre-order'));
  
  if(preOrderFruits.length <= 0){
    return (
      <View>
        <Text style={styles.preOrderText}>Pre-order</Text>
        <EmptyTabView/>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <Text style={styles.preOrderText}>Pre-order</Text>
      <FlatList 
        data={preOrderFruits}
        renderItem={(itemData) => <Pre_OrderCard 
                                      id={itemData.item.id}
                                      name={itemData.item.name} 
                                      category={itemData.item.category} 
                                      price={itemData.item.price} 
                                      link={itemData.item.link} 
                                      tab={itemData.item.tab}
                                      cardColor={itemData.item.cardColor}
                                      description={itemData.item.description}
                                      quantity={itemData.item.quantity}
                                  />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 5,
        paddingBottom: 10, 
    },
    preOrderText: {
        color: Colors.primary300,
        fontFamily: 'Maven',
        fontSize: deviceWidth < 360? 17 : 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})