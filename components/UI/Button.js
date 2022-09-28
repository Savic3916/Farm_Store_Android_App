import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/redux/fruits';
  
export default function Button({ children, id }) {

    const navigation = useNavigation();

    // fruits REDUX state
    const fruits = useSelector((state) => state.fruitObject.furitsDetails);

    // the cart REDUX state
    const cartFruits = useSelector((state) => state.fruitObject.cartFruits);
    const dispatch = useDispatch();

   //  button press method
    const pressHandler = (id) => {
        // filter based on ID from fruits
        const fruitObject = fruits.filter((fruit) => fruit.id === id);
        // on this fruitObject above, get the object out of the array
        const getFruitObject = fruitObject[0];
        // add a quantity key-value pair
        const updateFruitObject = {...getFruitObject, quantity: 1};
        // create an array and push this updated object in
        const updateFruitArray = [updateFruitObject];

        // check if cartFruit is empty
        if(cartFruits.length <= 0){
            // if it is empty, spread the updateFruitArray
            dispatch(addToCart(updateFruitArray));
        }else{
            // my array
            const existingIDs = [];
            // loop through the cart array to see if the id exist
            for(let a = 0; a < cartFruits.length; a++){
                // get cartFruits ID at index
                const myCartFruitID = cartFruits[a]['id'];
                // add id into that array
                existingIDs.push(myCartFruitID);
            };
            
            
            if(existingIDs.includes(id)){
                dispatch(addToCart([...cartFruits]))
            }else{
                dispatch(addToCart([...cartFruits, ...updateFruitArray]));
                
            }
        }
        navigation.navigate('Cart');
    };


  return (
    <View>
        <Pressable 
            onPress={() => pressHandler(id)}
            style={({pressed}) => pressed? [styles.button, styles.pressed]: styles.button}
        >
            <Text style={styles.text}>{ children }</Text>
        </Pressable>
    </View>
  )
};

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.primary100,
        borderRadius: 18,
        marginTop: deviceHeight > 712? 70 : 35,
        marginBottom: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    text: {
        color: 'white',
        fontFamily: 'Maven',
        fontSize: 18,
        fontWeight: 'bold',
    }
})