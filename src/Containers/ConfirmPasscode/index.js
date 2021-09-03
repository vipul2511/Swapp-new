import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import Pinkeyboard from '../../Components/Pinkeyboard';
import PopupModal from '../../Components/PopupModal';
import {useRoute} from '@react-navigation/native';
import Button from '../../Components/CreatingAccount/Button';

const ConfirmPassCode = ({navigation}) => {
  const route = useRoute();
  const [showModal, setshowModal] = React.useState(false);
  const onPress = () => {
    navigation.navigate('OnBoarding');
  };
  const onSucess = () => {
    if (route.params && route.params.InitalScreen) {
      setshowModal(true);
    } else {
      navigation.navigate('RecoveryPhaseScreen');
    }
  };
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
            // marginTop: hp('4%'),
            fontFamily: 'Poppins-SemiBold',
            textAlign: 'center',
          }}>
          Confirm new passcode
        </Text>
      </View>
      <Pinkeyboard navigation={navigation} confirm={true} onSucess={onSucess} />
      {showModal && (
        <PopupModal
          visible={true}
          children={
            'You have successfully exported your Swap account. Have a good use of the app.'
          }
          height={'57%'}
          onPress={onPress}
        />
      )}
      <View>
        <Button
          handleFunction={() => navigation.navigate('RecoveryPhaseScreen')}
          btnText={'Next'}
          // style={{marginTop:20}}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('RecoveryPhaseScreen')}>
        <Text style={{color: '#5E6272', textAlign: 'center'}}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmPassCode;
