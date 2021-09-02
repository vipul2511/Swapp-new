import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CustomInput from '../../Components/CustomInput';
import TransparentButton from '../../Components/TransparentButton';
import Button from '../../Components/CreatingAccount/Button';
import Styles from './styles';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import {LOGINACTION} from '../../Saga/action';
import {connect} from 'react-redux';

const EnterPassword = ({navigation, LoginDispatch, Login}) => {
  const [isshow, setIsShow] = useState(false);
  const [warning, Setwarning] = useState(false);
  const [Password, setPassword] = useState('');
  const [focus, setFocus] = useState(false);
  console.log(Login);
  const Inputhandler = e => {
    setPassword(e);
  };
  const updatefocus = () => {
    setFocus(false);
    setFocus(!focus);
  };

  const Setdata = () => {
    if (Password.length < 8) {
      setFocus(false);
      Setwarning(true);
    } else {
      navigation.navigate('OnBoarding');
    }
  };
  useEffect(() => {
    if (Password.length > 8) {
      Setwarning(false);
    }
  }, [Password.length]);

  return (
    <SafeAreaView style={{backgroundColor: '#181A20', flex: 1}}>
      <KeyboardAvoidingView
        style={{backgroundColor: '#181A20', flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={{marginTop: hp('4%')}}>
          <BackArrow />
        </View>
        <View style={{marginHorizontal: wp('8%')}}>
          <View style={{marginVertical: hp('3%')}}>
            <Text
              style={{
                fontSize: wp('5.5%'),
                fontWeight: '600',
                fontFamily: 'Poppins-SemiBold',
                color: 'white',
              }}>
              Enter your password
            </Text>
          </View>

          <CustomInput
            header={'PASSWORD (MIN 8 CHARS)'}
            placeholder={''}
            eye
            eyeStyle={{
              height: 20,
              width: 20,
              overflow: 'hidden',
              position: 'absolute',
              right: wp('1%'),
              top: hp('5%'),
              zIndex: 100,
            }}
            securetext
            onchange={Inputhandler}
            value={Password}
            warning={warning}
            noBorder
            style={{
              color: warning ? '#FF0B80' : '#fff',
              fontFamily: 'Inter-Bold',
            }}
          />
          {/* <View style={focus?Styles.focusborder:warning?Styles.activeborder:Styles.disableborder} /> */}
          {warning ? (
            <Text
              style={[
                Styles.active,
                {
                  fontSize: 15,
                  fontFamily: 'Inter-Regular',
                  marginTop: hp('1.5%'),
                },
              ]}>
              Wrong password
            </Text>
          ) : null}

          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
              onPress={LoginDispatch}
              style={{
                borderColor: '#5E6272',
                borderWidth: 1.5,
                // fontFamily:'Inter-Regular',

                borderRadius: 20,
                padding: 5,
                marginTop: hp('2%'),
                paddingHorizontal: wp('3%'),
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#5E6272',
                  letterSpacing: 0.5,
                  fontSize: 16,
                  fontFamily: 'Inter-Regular',
                }}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* <TextInput placeholder={'dffd'}/> */}
        </View>
        {!warning ? (
          <Button handleFunction={text => Setdata(text)} btnText={'Log in'} />
        ) : (
          // <TransparentButton
          //   title="log in"
          //   onPress={() => {
          //     //   setShowModal(true);
          //   }}
          //   style={{
          //     width: wp('85%'),
          //     height: hp('7.3%'),
          //     backgroundColor: '#262A34',
          //     borderColor: '#262A34',
          //     marginTop: 'auto',
          //   }}
          //   textStyle={{color: '#3A3D46'}}
          // />
          <Button
            style={true}
            handleFunction={text => {
              Setdata(text);
            }}
            btnText={'Log in'}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const mapStateToprops = state => {
  return {
    Login: state.Login.Loginval,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    LoginDispatch: () =>
      dispatch({
        type: LOGINACTION,
        payload: 7,
      }),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(EnterPassword);
