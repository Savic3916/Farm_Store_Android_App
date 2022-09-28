import { StyleSheet, View } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';
import Cards from '../UI/Cards';

export default function PopularItem({ id, cardColor, bottomCardColor, name, price, link, tab, description }) {
  return (
    <View>
        <Cards 
            style={{backgroundColor: Colors.accentpineapple100}} 
            bottomStyle={{backgroundColor: Colors.accentpineapple200}}
            id={id}
            name={name}
            price={price.toFixed(2)}
            link={link}
            cardColor={cardColor}
            bottomCardColor={bottomCardColor}
            tab={tab}
            description={description}
        />
    </View>
  )
}

const styles = StyleSheet.create({})