import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import Pinkeyboard from '../../Components/Pinkeyboard';
import Button from '../../Components/CreatingAccount/Button';
import {useRoute} from '@react-navigation/native';
const CreateNewPasscode = ({navigation}) => {
  const route = useRoute();
  function onSucess() {
    navigation.navigate('ConfirmPassCode', {
      InitalScreen: route?.params?.InitalScreen,
    });
    // navigation.navigate('RecoveryPhaseScreen');
  }
  return (
    <View style={{backgroundColor: '#181A20', flex: 1}}>
      <View style={{marginTop: hp('2%')}}>
        <BackArrow />
      </View>
      <View style={{marginHorizontal: wp('5%'), marginBottom: hp('5%')}}>
        <Text
          style={{
            color: 'white',
            fontSize: wp('6.8%'),
            fontWeight: '600',
            marginTop: hp('4%'),
            fontFamily: 'Poppins-SemiBold',
          }}>
          Create new passcode
        </Text>
      </View>
      <Pinkeyboard
        navigation={navigation}
        confirm={false}
        onSucess={onSucess}
      />
    </View>
  );
};

export default CreateNewPasscode;