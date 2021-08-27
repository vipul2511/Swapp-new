import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomInput from '../../Components/CustomInput';
import TransparentButton from '../../Components/TransparentButton';

import Styles from './styles';

const EnterPassword = ({navigation}) => {
  const [isshow, setIsShow] = useState(false);
  const [warning, Setwarning] = useState(false);
  const [inputval, Setinputval] = useState('');

  const Inputhandler = e => {
    Setinputval(e);
  };

  const Setdata = () => {
    if (inputval.length < 8) {
      Setwarning(true);
    } else {
      navigation.navigate('CreateNewPassword');
    }
  };
  useEffect(() => {
    if (inputval.length > 8) {
      Setwarning(false);
    }
    console.log('hy');
  }, [inputval]);

  return (
    <KeyboardAvoidingView
      style={{backgroundColor: '#2C303A', flex: 1}}
      //   behavior={Platform.OS === "ios" ? "padding" : "height"}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
      enabled={Platform.OS === 'ios' ? true : false}>
      <View style={{marginHorizontal: wp('8%')}}>
        <TouchableOpacity
          style={{marginTop: hp('7%')}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../Assets/Images/ArrowLeft.png')} />
        </TouchableOpacity>
        <View style={{marginVertical: hp('5%')}}>
          <Text style={{fontSize: 24, fontWeight: '600', color: 'white'}}>
            Enter your password
          </Text>
        </View>
        <Text style={[{fontSize: 12, letterSpacing: 0.5}, Styles.disable]}>
          Password (min 8 chars)
        </Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              setIsShow(!isshow);
            }}
            style={{
              height: 20,
              width: 20,
              overflow: 'hidden',
              position: 'absolute',
              right: wp('1%'),
              top: hp('1.5'),
              zIndex: 100,
            }}>
            <Image
              source={require('../../Assets/Images/Hide.png')}
              style={{resizeMode: 'contain', height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
          <TextInput
            secureTextEntry={isshow}
            value={inputval}
            onChangeText={e => Inputhandler(e)}
            //   style={{fontSize: 20, letterSpacing: 10, color: '#FF0B80'}}
            style={[
              {
                fontSize: 20,
                letterSpacing: 10,
                paddingRight: 44,
                fontStyle: 'normal',
              },
              !warning ? Styles.disable : Styles.active,
            ]}
          />
        </View>
        <View style={Styles.disableborder} />
        {warning ? (
          <Text style={[Styles.active, {fontSize: 13, marginTop: hp('1.5%')}]}>
            Wrong password
          </Text>
        ) : null}

        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{
              borderColor: '#5E6272',
              borderWidth: 1,
              borderRadius: 20,
              padding: 5,
              marginTop: hp('1%'),
            }}>
            <Text style={{textAlign: 'center', color: '#5E6272'}}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: wp('10%')}}>
          {!warning ? (
            <TransparentButton
              title="Log in"
              onPress={Setdata}
              style={{
                width: wp('85%'),
                height: hp('7.3%'),
                backgroundColor: '#246BFD',
                borderColor: '#246BFD',
                marginTop: hp('40%'),
              }}
            />
          ) : (
            <TransparentButton
              title="log in"
              onPress={() => {
                //   setShowModal(true);
              }}
              style={{
                width: wp('85%'),
                height: hp('7.3%'),
                backgroundColor: '#262A34',
                borderColor: '#262A34',
                marginTop: hp('40%'),
              }}
              textStyle={{color: '#3A3D46'}}
            />
          )}
        </View>
        {/* <TextInput placeholder={'dffd'}/> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default EnterPassword;
