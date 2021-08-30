import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Containers/Splash';
import OnBoarding from '../Containers/OnBoarding';
import InitialScreen from "../Containers/CreatingAccount/InitialScreen";
import EnterEmailPhoneScreen from "../Containers/CreatingAccount/EnterEmailPhoneScreen";
import Verification from "../Containers/CreatingAccount/Verification";
import ThreeThingsScreen from "../Containers/CreatingAccount/ThreeThingsScreen";
import RecoveryPhaseScreen from "../Containers/CreatingAccount/RecoveryPhaseScreen";
import ConfirmBackupPhaseScreen from "../Containers/CreatingAccount/ConfirmBackupPhaseScreen";
import PinCodeScreen from "../Containers/PinScreen";
import NameScreen from "../Containers/NameScreen";
import AcceptTerm from "../Containers/AcceptTerm";
import CreateNewPasscode from '../Containers/CreateNewPassCode';
import CreateNewPassword from '../Containers/CreateNewPassword';
import EnterPassword from '../Containers/EnterPassword';
import ConfirmPassCode from '../Containers/ConfirmPasscode';
const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown:false}} />
          <Stack.Screen name="InitialScreen" component={InitialScreen} options={{headerShown:false}} />
          <Stack.Screen name="EnterEmailPhoneScreen" component={EnterEmailPhoneScreen} options={{headerShown:false}} />
          <Stack.Screen name="Verification" component={Verification} options={{headerShown:false}} />
          <Stack.Screen name="ThreeThingsScreen" component={ThreeThingsScreen} options={{headerShown:false}} />
          <Stack.Screen name="RecoveryPhaseScreen" component={RecoveryPhaseScreen} options={{headerShown:false}} />
          <Stack.Screen name="ConfirmBackupPhaseScreen" component={ConfirmBackupPhaseScreen} options={{headerShown:false}} />
          <Stack.Screen name="PinScreen" component={PinCodeScreen} options={{headerShown:false}} />
          <Stack.Screen name="NameScreen" component={NameScreen} options={{headerShown:false}} />
          <Stack.Screen name="AcceptTerm" component={AcceptTerm} options={{headerShown:false}} />
          <Stack.Screen name="CreateNewPasscode" component={CreateNewPasscode} options={{headerShown:false}} />
          <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} options={{headerShown:false}} />
          <Stack.Screen name="EnterPassword" component={EnterPassword} options={{headerShown:false}} />
          <Stack.Screen name="ConfirmPassCode" component={ConfirmPassCode} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
