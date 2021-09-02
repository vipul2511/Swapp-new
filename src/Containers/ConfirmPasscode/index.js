import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
import Pinkeyboard from '../../Components/Pinkeyboard';
import PopupModal from '../../Components/PopupModal';
import { useRoute } from '@react-navigation/native';
const ConfirmPassCode = ({navigation}) => {
  const route = useRoute();
  const [showModal, setshowModal] = React.useState(false);
 const onPress =()=>{
   navigation.navigate('OnBoarding');
 }
  const onSucess = () => {
    if(route.params&&route.params.InitalScreen) setshowModal(true);
    else navigation.navigate('RecoveryPhaseScreen');
    
    
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
            marginTop: hp('4%'),
            fontFamily: 'Poppins-SemiBold',
          }}>
          {/* Create new passcode */}
        </Text>
      </View>
      <Pinkeyboard navigation={navigation} confirm={true} onSucess={onSucess} />
      {showModal && (
        <PopupModal
          visible={true}
          children={"You have successfully exported your Swap account. Have a good use of the app."}
          height={'57%'}
          onPress={onPress}
          >
         
        </PopupModal>
      )}
    </View>
  );
};

export default ConfirmPassCode;
