import { Image, Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

export default function Cards({ id, cardColor, bottomCardColor, name, price, link, tab, description }) {

    const navigation = useNavigation();

  return (
    <View>
        <Pressable 
            style={({pressed}) => pressed? [styles.card, styles.pressed, {backgroundColor: cardColor}] : 
                                                                        [styles.card, {backgroundColor: cardColor}]} 
            onPress={() => navigation.navigate('Preview', { id: id,
                                                            tab: tab, 
                                                            link: link, 
                                                            cardColor: cardColor, 
                                                            name: name, 
                                                            description: description,
                                                            price: price,
                                                        }
                                                )}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: link }} style={styles.image}/>
            </View>
            <View style={[styles.bottomPartOfCard, {backgroundColor: bottomCardColor}]}>
                <View style={styles.bottomPartTextView}>
                    <Text style={styles.nameText}>{ name }</Text>
                    <Text style={styles.priceText}> ${ price }</Text>
                </View>
            </View>
        </Pressable>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    card: {
        width: deviceWidth < 360?  210 : 240,
        height: deviceWidth < 360? 230: 265,
        borderRadius: 40,
        marginTop: 10,
        marginRight: 20,
        marginBottom: 5,
        padding: 10,
        alignItems: 'center',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    imageContainer: {
        width: deviceWidth < 360? 190 : 220,
        height: deviceWidth < 360? 180 : 210,
        alignItems: 'center',
        position: 'relative'
    },
    image: {
        width: deviceWidth < 360? 180 : 210,
        height: deviceWidth < 360? 190 : 220,
        alignItems: 'center',

    },
    bottomPartOfCard: {
        width: deviceWidth < 360? 210 : 240,
        height: deviceWidth < 360? 45 : 50,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        position: 'absolute',
        bottom: 0,
    },
    bottomPartTextView: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    nameText: {
        color: 'white',
        fontSize: deviceWidth < 360? 12 : 16,
        fontWeight: 'bold',
        fontFamily: 'Maven'
    },
    priceText: {
        color: 'white',
        fontSize: deviceWidth < 360? 14 : 18,
        fontWeight: 'bold',
        fontFamily: 'Maven',
    }
})