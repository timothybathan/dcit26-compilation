import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 


import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={ HomeStack } options={{drawerIcon: ({focused, color, size}) => (<AntDesign name="home" size={24} color="black" />
)}}/> 
      <Drawer.Screen name="About" component={ AboutStack } options={{drawerIcon: ({focused, color, size}) => (<Entypo name="book" size={24} color="black" />
)}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;