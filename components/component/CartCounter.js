import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import PlusMinusBox from '../UI/PlusMinusBox';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, addToCart } from '../../store/redux/fruits';

export default function CartCounter({ id, quantity }) {

    const navigation = useNavigation();

    const cartFruits = useSelector((state) => state.fruitObject.cartFruits);
    const dispatch = useDispatch();

    const yesPressHandler = (id) => {
        const storeFiltered = cartFruits.filter((fruit) => fruit.id !== id);
        dispatch(addToCart(storeFiltered));
    };
    const noPressHandler = () => {
        navigation.goBack;
    }

     const incrementProductQuantity = (id) => {
        // find index of object you want to change
        const findIndex = cartFruits.findIndex((fruit) => fruit.id === id);
        // get the required object
        const requiredObjectToEdit = cartFruits[findIndex];
        // edit the object to be edited
        const editRequiredObject = {...requiredObjectToEdit, quantity: requiredObjectToEdit.quantity + 1};
        // override the requiredObjectToEdit
        const overrideObject = {...requiredObjectToEdit, ...editRequiredObject};
        // get all the object in the array
        const cartArray = [...cartFruits];
        // modify the array index
        cartArray[findIndex] = overrideObject;

        dispatch(updateQuantity(cartArray));
     };


     const derementProductQuantity = (id) => {
        // find index of object you want to change
        const findIndex = cartFruits.findIndex((fruit) => fruit.id === id);
        // get the required object
        const requiredObjectToEdit = cartFruits[findIndex];

        // if quanity is less than 0; alert a message then delete it from cartFruits.
        if(requiredObjectToEdit.quantity-1 < 1){
             Alert.alert(
                'Warning!!', 
                'Are you sure you want to delete from Cart?', 
                [{ text: "Yes", onPress: () => yesPressHandler(id)}, 
                 { text: 'No', onPress: noPressHandler},
                ]
            );
        }else{      
            // edit the object to be edited
            const editRequiredObject = {...requiredObjectToEdit, quantity: requiredObjectToEdit.quantity - 1};
            // override the requiredObjectToEdit
            const overrideObject = {...requiredObjectToEdit, ...editRequiredObject};
            // get all the object in the array
            const cartArray = [...cartFruits];
            // modify the array index
            cartArray[findIndex] = overrideObject;
    
            dispatch(updateQuantity(cartArray));
        }

     };

  return (
    <View style={styles.container}>
        <PlusMinusBox onPress={() => incrementProductQuantity(id)}> 
            <Entypo name="plus" size={15} color="white" /> 
        </PlusMinusBox>
        <Text style={styles.text}> { quantity } </Text>
        <PlusMinusBox onPress={() => derementProductQuantity(id)}> 
            <Entypo name="minus" size={15} color="white" /> 
        </PlusMinusBox>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: Colors.primary300,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Maven',
    }
})