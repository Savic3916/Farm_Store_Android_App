import { StyleSheet, View, Modal } from 'react-native';
import React from 'react';

import Icons from '../UI/Icons';
import IconTab from './IconTab';
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFruits, addFavourite, removeFavourite } from '../../store/redux/fruits';

export default function ModalPopUp({ id, modalOn, modalOff }) {

  const navigation = useNavigation();
  const fruits = useSelector((state) => state.fruitObject.furitsDetails);
  const favoriteFruitsID = useSelector((state) => state.fruitObject.favouriteFruits);
  const dispatch = useDispatch();

  // deleting a fruit
  const deleteFruitsHandler = (id) => {
    dispatch(deleteFruits(fruits.filter((fruits) => fruits.id !== id)));
    navigation.navigate('Drawer');
  };

  // adding and removing from favourites
  const fruitIsFavourite = favoriteFruitsID.includes(id);

  const toggleFavourite = (id) => {
    if(fruitIsFavourite){
      dispatch(removeFavourite(favoriteFruitsID.filter((fruitsID) => fruitsID !== id)));
    }else{
      dispatch(addFavourite([...favoriteFruitsID, id]));
      navigation.navigate('Drawer', {screen: 'Favourites'});
    }
  }

  return (
    <Modal animationType='slide' visible={modalOn} transparent={true}>
        <View style={styles.modalScreen}>
            <View style={styles.modalPopUpContainer}>
              <View style={styles.cancelIconView}>
                <Icons onPress={modalOff}>
                    <AntDesign name="closecircle" size={24} color="red" />
                </Icons>
              </View>
              <View style={styles.otherIconsView}>
                 <IconTab name='update' title={'Update'} />
                 <IconTab name='delete' title={'Delete'} onPress={() => deleteFruitsHandler(id)}/>
                 <IconTab name={fruitIsFavourite? 'favorite': 'favorite-outline'} title={'Add to Favourite'} onPress={() => toggleFavourite(id)}/>
              </View>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalScreen: {
      paddingTop: 30,
      flex: 1,
      backgroundColor: 'gray',
      opacity: 0.9,
      position: 'relative',
    },
    cancelIconView: {
      position: 'absolute',
      top: 10,
      right: 15,
    },
    modalPopUpContainer: {
      width: '60%',
      position: 'absolute',
      top: '60%',
      right: '5%',
      padding: 15,
      borderRadius: 20,
      backgroundColor: 'white',
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    otherIconsView: {
      width: '100%',
      padding: 5,
      marginTop: 20,
    }
})