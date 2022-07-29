import 'react-native-gesture-handler'

import  React from 'react';
import { Button, View } from 'react-native';

import SidebarNavigator from './navigator/SideBarNavigator';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';







export default function App() {
  return (
    <NavigationContainer>
      <SidebarNavigator/>
      
    </NavigationContainer>
    // <View>
    //   <HomeScreen/>
    // </View>

    
  );}
