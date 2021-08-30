import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import Pinkeyboard from '../../Components/Pinkeyboard';
const ConfirmPassCode = ({navigation}) => {
 const  onSucess=()=>{
    navigation.navigate('EnterPassword')
  }
  return (
    <View style={{backgroundColor: '#181A20', flex: 1}}>
            <View style={{marginTop:hp('4%')}}>
        <BackArrow  />
        </View>
      <View style={{marginHorizontal: wp('5%'), marginBottom: hp('5%')}}>
        <Text
          style={{
            color: 'white',
            fontSize: wp('6.8%'),
            fontWeight: '600',
            marginTop: hp('4%'),
            fontFamily:'Poppins-SemiBold'

          }}>
          {/* Create new passcode */}
        </Text>
      </View>
      <Pinkeyboard navigation={navigation} confirm={true} onSucess={onSucess}/>
    </View>
  );
};

export default ConfirmPassCode;
