import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './Styles';
import BackArrow from '../../../Components/CreatingAccount/BackArrow';
import Title from '../../../Components/CreatingAccount/Title';
import Button from '../../../Components/CreatingAccount/Button';
// import { FloatingLabelInput } from 'react-native-floating-label-input';
import FloatingLabelInput from '../../../Components/FloatingTextInput';
import CustomInput from '../../../Components/CustomInput';
// import f from './c'
const EnterEmailPhoneScreen = ({navigation}) => {
  const [cont, setCont] = useState('');
  const [email, setemail] = useState('');
  function handleFunction() {
    navigation.navigate('Verification');
  }
  function handleTextChange(text) {
    setCont(text);
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={StatusBar.currentHeight}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <StatusBar backgroundColor="#181A20" barStyle="light-content" />
        <BackArrow />

        <Title
          title={'Create your Swapp'}
          text={'We will send verification code on your email ID.'}
        />

        <View style={styles.inputBlock}>
          {/* <Text style={styles.inputTitle}>ENTER YOUR EMAIL</Text>
                   <TextInput
                       style={styles.input}
                   />  */}
          <CustomInput
            onchange={handleTextChange}
            value={cont}
            header={'ENTER YOUR EMAIL'}
          />
        </View>

        <Button
          handleFunction={() => handleFunction()}
          btnText={'Send Verification Code'}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EnterEmailPhoneScreen;
