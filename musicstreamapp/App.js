import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {StyleSheet,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SingUp from './SingUp';
import Home from './Menu/Home';
import Search from './Menu/Search';
import Feed from './Menu/Feed';
import Library from './Menu/Library';
import ChartsCanada from './Menu/Homes/ChartsCanada'; 
import Play from './Menu/Homes/PlayMusic/Play';


const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="search" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="feed" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="list" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function HomeStack({navigation}) {
  return (
      <Stack1.Navigator>
      
        <Stack1.Screen
          name="Home"
          component={Home}
          options={{ headerMode: 'none' }}
        />
        <Stack1.Screen
          name="ChartsCanada"
          component={ChartsCanada}
          options={{ headerMode: 'none' }}
        />
        <Stack1.Screen
          name="Play"
          component={Play}
          options={{ headerMode: 'none' }}
        />
      </Stack1.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{ headerMode: 'none' }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerMode: 'none' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
