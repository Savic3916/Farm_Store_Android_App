import { StyleSheet, Image, View, Dimensions } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';
import DesciptionPreview from './DesciptionPreview';
import Button from '../UI/Button';


export default function TabComponentPreview({ id, backgroundColor, children, link, name, description, price }) {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View>
            {children}
        </View>
        <Image style={styles.image} source={{uri: link}}/>
        <View style={styles.textContainer}>
           <DesciptionPreview name={name} description={description} price={price} id={id}/>
           <Button id={id} link={link} name={name} price={price}> Add to cart | ${price}</Button>
        </View>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: deviceWidth < 360? 30: 50,
    },
    image: {
        width: '100%',
        height: deviceWidth < 360? '45%' : '48%',
    },
    textContainer: {
        borderColor: Colors.borderColorGray100,
        borderWidth: 1,
        backgroundColor: 'white', 
        position: 'absolute', 
        bottom: 0, 
        width: '100%', 
        height: '45%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 15,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
})