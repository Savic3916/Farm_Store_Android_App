import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';

import Tab from '../components/UI/Tab';
import Colors from '../constants/Colors';
import Popular from '../components/tabs/Popular';
import Discounts from '../components/tabs/Discounts';
import GoldApples from '../components/tabs/GoldApples';
import SunGrapes from '../components/tabs/SunGrapes';
import Pre_Order from '../components/component/Pre_Order';

export default function HomeScreen() {
  
  const [tabClicked, setTabClicked] = useState('popular');

  let content = <Popular/>

  if(tabClicked === 'popular'){
    content = <Popular/>
  }else if(tabClicked === 'discount'){
    content = <Discounts/>
  }else if(tabClicked === 'gold-apple'){
    content = <GoldApples/>
  }else if(tabClicked === 'sun-grapes'){
    content = <SunGrapes/>
  }


  return (
    <View style={styles.screen}>
      <Text style={styles.text1}> Fresh <Text style={styles.text2}>fruits and vegetables </Text></Text>
        <ScrollView horizontal={true} style={styles.tabView} >    
          <Tab onPress={() => setTabClicked('popular')} pressed={tabClicked === 'popular'}>  Popular </Tab>
          <Tab onPress={() => setTabClicked('discount')} pressed={tabClicked === 'discount'}>  Discounts </Tab>
          <Tab onPress={() => setTabClicked('gold-apple')} pressed={tabClicked === 'gold-apple'}>  Gold apples </Tab>
          <Tab onPress={() => setTabClicked('sun-grapes')} pressed={tabClicked === 'sun-grapes'}>  Sun grapes </Tab>
        </ScrollView>
        {content}
        <Pre_Order/>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    text1: {
      color: Colors.primary100,
      fontFamily: 'Maven',
      fontSize: deviceWidth < 360? 22 : 27,
      fontWeight: 'bold',
    },
    text2: {
      color: Colors.primary300,
    },
    tabs: {
      flexDirection: 'row',
    },
    tabView: { 
      maxHeight: '5%', 
      marginTop: 10, 
    },
})