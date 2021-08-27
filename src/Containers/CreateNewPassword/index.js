import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Pinkeyboard from '../../Components/Pinkeyboard';

const CreateNewPassword = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#2C303A', flex: 1}}>
      <View style={{marginHorizontal: wp('8%'), marginBottom: hp('5%')}}>
        <TouchableOpacity
          style={{marginTop: hp('4%')}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../Assets/Images/ArrowLeft.png')} />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 32,
            fontWeight: '600',
            marginTop: hp('4%'),
          }}>
          Create new passcode
        </Text>
      </View>
      <Pinkeyboard navigation={navigation}/>
    </View>
  );
};

export default CreateNewPassword;
