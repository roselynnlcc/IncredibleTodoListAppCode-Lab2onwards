/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, SafeAreaView, Button} from 'react-native';
import Home from './src/screens/Home';
import About from './src/screens/About';
import ChuckNorrisFact from './src/ChuckNorrisFact';



const Stack = createStackNavigator();

function App() {


  return (
      <NavigationContainer>
        {/* Add the following: */}
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="ChuckNorrisFact" component={ChuckNorrisFact} />
        </Stack.Navigator>
        {/**********************/}
      </NavigationContainer>
  );
}

export default App;
