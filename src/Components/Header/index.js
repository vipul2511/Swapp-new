import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
      <View>
        <TouchableOpacity
          style={{marginLeft: wp('5%')}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../Assets/Images/arrow.png')}  style={{width:hp('5%'),height:hp('5%')}} />

          {/* <ArrowLeft  height={15} width={15} /> */}
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            marginRight: wp('14%'),
            fontSize: wp('5.5%'),
            fontWeight: '600',
            color: 'white',
          }}>
          Registration
        </Text>
      </View>
    </View>
  );
};

export default Header;
