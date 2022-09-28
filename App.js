import React from 'react';

import HomeScreen from './screens/HomeScreen';
import Favourites from './screens/Favourites';
import Preview from './screens/Preview';
import Colors from './constants/Colors';
import Cart from './screens/Cart';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, AntDesign, Ionicons  } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import CartCounterHompageCard from './components/UI/CartCounterHompageCard';



export default function App() {

   // navigation calls
   const Stack = createNativeStackNavigator();
   const Drawer = createDrawerNavigator();


  // using font-family
  let [loaded] = useFonts({
    'Maven': require('./assets/fonts/MavenPro-VariableFont_wght.ttf')
  });

  if(!loaded){
    return null;
  };


// my Drawer nested navigation
  function MyDrawer(){
    return(
      <Drawer.Navigator screenOptions={{drawerActiveTintColor: Colors.primary300, drawerInactiveTintColor: 'white', drawerStyle: {backgroundColor: Colors.primary100}}}>
        <Drawer.Screen name='Home' component={HomeScreen} 
          options={({navigation}) => ({title: '', drawerLabel: 'Home', 
                    headerRight: () => (
                              <CartCounterHompageCard mode='custom' onPress={() => navigation.navigate('Cart')}>
                                  <Ionicons name="cart" size={24} color="white" />
                              </CartCounterHompageCard>),
                    drawerIcon: ({color, size}) => <Entypo name="home" size={size} color={color} />})}/>
        <Drawer.Screen name='Favourites' component={Favourites} 
          options={{drawerIcon: ({color, size}) => <AntDesign name="heart" size={size} color={color} />}}/>
      </Drawer.Navigator>
    )
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Drawer' component={MyDrawer} options={{headerShown: false}}/>
          <Stack.Screen name='Preview' component={Preview} options={{headerShown: false}} />
          <Stack.Screen name='Cart' component={Cart} options={{headerTitleAlign: 'center', headerStyle: {backgroundColor: 'white'}, headerTitleStyle: {fontSize: 20, fontWeight: 'bold', fontFamily: 'Maven', color: '#1B0B43'}}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
