import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Styles from './styles';
import CustomInput from '../../Components/CustomInput';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TransparentButton from '../../Components/TransparentButton';

const CreateNewPassword1 = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#2C303A', flex: 1}}>
      <View style={{marginHorizontal: wp('8%')}}>
        <TouchableOpacity
          style={{marginTop: hp('4%')}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../Assets/Images/ArrowLeft.png')} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            color: 'white',
            marginTop: hp('5%'),
            marginBottom:hp('2%')
          }}>
          Create new password
        </Text>
       
        <CustomInput
          header={'New password (min 8 chars)'}
          placeholder={''}
          securetext
          fontstyle={{fontSize:14}}
        />
        <CustomInput
          header={'New password (min 8 chars)'}
          placeholder={''}
          securetext
          fontstyle={{fontSize:14}}
        />
        <TransparentButton
          title="Create"
          //   onPress={Setdata}
          style={{
            width: wp('85%'),
            height: hp('7.3%'),
            backgroundColor: '#246BFD',
            borderColor: '#246BFD',
            marginTop: hp('40%'),
          }}
        />
      </View>
    </View>
  );
};

export default CreateNewPassword1;
