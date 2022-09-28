import { StyleSheet, View } from 'react-native';
import React from 'react';

import EmptyLittleCards from '../components/UI/EmptyLittleCards';
import TabComponentPreview from '../components/component/TabComponentPreview';
import { Ionicons } from '@expo/vector-icons';

export default function Preview({ navigation, route }) {

  const id = route.params?.id;
  const link = route.params?.link;
  const cardColor = route.params?.cardColor;
  const name = route.params?.name;
  const description = route.params?.description;
  const price = route.params?.price;
 

  return (
    <View style={styles.previewContainer}>
      <TabComponentPreview 
                          id={id}
                          backgroundColor={cardColor} 
                          link={link} 
                          name={name} 
                          description={description} 
                          price={price}
      >
          <EmptyLittleCards onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
          </EmptyLittleCards>
      </TabComponentPreview>
    </View>
  )
}

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
  }
})