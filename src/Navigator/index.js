import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Containers/Splash';
import OnBoarding from '../Containers/OnBoarding';
import PinScreen from '../Containers/PinScreen';
import NameScreen from '../Containers/NameScreen';
import AcceptTerm from '../Containers/AcceptTerm';
const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PinScreen"
          component={PinScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NameScreen"
          component={NameScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AcceptTerm"
          component={AcceptTerm}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
