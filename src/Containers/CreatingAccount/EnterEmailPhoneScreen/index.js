import React, {useEffect, useState} from 'react';
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

import {connect} from 'react-redux';
import bip39 from 'react-native-bip39';
import CustomInput from '../../../Components/CustomInput';

const EnterEmailPhoneScreen = props => {
  const [cont, setCont] = useState('');
  const [email, setEmail] = useState('');

  function handleFunction() {
   
  }

  const handleSendEmail = () => {
    props.sendEmail({
      email: 'mahirfaker014@yopmail.com',
      is_credit: true,
      name: 'mahir',
      password: 'acdfkdjfdkljf',
    });
    props.navigation.navigate('Verification');
  };

  function handleTextChange(text) {
    setCont(text);
  }

  const generateMnemonic = async () => {
    try {
      console.log('-----------');
      let mnemonic = await bip39.generateMnemonic(256); // default to 128
      console.log(mnemonic);
      let h = bip39.mnemonicToEntropy(mnemonic);
      console.log(h);
      const mnemonic2 = bip39.entropyToMnemonic(h);
      console.log(mnemonic2);
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  useEffect(() => {
    /*const mnemonic = bip39.entropyToMnemonic('133755ff')
        console.log(mnemonic)*/
    generateMnemonic();
    return () => {
      props.eraseEmailError();
    };
  }, []);

  useEffect(() => {
    if (props.auth.email) {
      props.navigation.navigate('Verification');
    }
  }, [props.auth]);

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
          <CustomInput
            onchange={handleTextChange}
            value={cont}
            header={'ENTER YOUR EMAIL'}
          />
        </View>

        <Button
          handleFunction={handleSendEmail}
          btnText={'Send Verification Code'}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  sendEmail: data => {
    dispatch({type: 'SEND_EMAIL', data});
  },
  eraseEmailError: () => {
    dispatch({type: 'ERASE_EMAIL_ERROR'});
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EnterEmailPhoneScreen);
