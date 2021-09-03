import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import Styles from './styles';
import CustomInput from '../../Components/CustomInput';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../Components/CreatingAccount/Button';
import {useRoute} from '@react-navigation/native';
const CreateNewPassword = ({navigation}) => {
  const [notmatched, setnotmatched] = useState(false);
  const [lengtherror, setlengtherror] = useState(false);
  const [Password, setPassword] = useState('');
  const route = useRoute();
  const [confirmPassword, setConfirmPassword] = useState('');
  const checkAndRedirect = () => {
    if (Password === confirmPassword && Password.length >= 8) {
      setnotmatched(false);
      navigation.navigate('CreateNewPasscode', {
        InitalScreen: route?.params?.InitalScreen,
      });
    } else {
      setnotmatched(true);
      setlengtherror(true);
    }
    if (confirmPassword.length < 8) {
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <BackArrow />
        <ScrollView style={{flex: 1, marginBottom: hp('1%')}}>
          <View style={{marginHorizontal: wp('5%')}}>
            <Text
              style={{
                fontSize: wp('6.5%'),
                fontWeight: '600',
                color: 'white',
                marginTop: hp('3%'),
                marginBottom: hp('2%'),
                fontFamily: 'Poppins-SemiBold',
              }}>
              Create new password
            </Text>

            <Text
              style={{
                color: '#5E6272',
                fontSize: 15,
                fontFamily: 'Inter-Regular',
                lineHeight: 24,
                fontWeight: '500',
              }}>
              Please create the password that will unlock your Swapp wallet on
              the current device. Please note, that Swapp won’t be able to
              recover the password for you.
            </Text>

            <CustomInput
              header={'NEW PASSWORD (MIN 8 CHARS)'}
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
              onchange={text => {
                setPassword(text);
              }}
              value={Password}
              fontstyle={{fontSize: wp('7%'), fontFamily: 'Inter-Bold'}}
            />
            <CustomInput
              header={'NEW PASSOWORD'}
              headertextstyle={{marginTop: 20}}
              placeholder={''}
              eye
              eyeStyle={{
                height: 20,
                width: 20,
                overflow: 'hidden',
                position: 'absolute',
                right: wp('1%'),
                // backgroundColor:'red',
                top: hp('8%'),
                // bottom:hp('50%'),
                zIndex: 100,
              }}
              securetext
              onchange={text => {
                setConfirmPassword(text);
              }}
              value={confirmPassword}
              fontstyle={{fontSize: wp('3.5%')}}
            />
            {lengtherror ? (
              <Text
                style={{
                  color: '#5E6272',
                  fontSize: 15,
                  fontFamily: 'Inter-Regular',
                  lineHeight: 24,
                  fontWeight: '500',
                }}>
                Must be a least 8 characters
              </Text>
            ) : null}
            {notmatched ? (
              <Text
                style={{
                  color: '#5E6272',
                  fontSize: 15,
                  fontFamily: 'Inter-Regular',
                  lineHeight: 24,
                  fontWeight: '500',
                }}>
                password Not Matched
              </Text>
            ) : null}
          </View>
        </ScrollView>
        <Button
          handleFunction={checkAndRedirect}
          btnText={'Create'}
          // style={{backgroundColor:'pink'}}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateNewPassword;
