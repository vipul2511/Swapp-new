import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import Header from '../../Components/Header';
import SelectionBtn from '../../Components/SelectionBtn';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TransparentButton from '../../Components/TransparentButton';
import ValidationPopup from '../../Components/ValidationPopup';
import PopupModal from '../../Components/PopupModal';
import Styles from './styles';
import Button from '../../Components/CreatingAccount/Button';
import BackArrow from '../../Components/CreatingAccount/BackArrow';
const AcceptTerm = ({navigation}) => {
  const [showValidpop, setshowValidpop] = React.useState(false);
  const [Selectedvalue, setselectedvalue] = React.useState('');
  // const [showModal,setshowModal]= React.useState(false);
  const [PopModal, setPopModal] = useState(false);
  const selection = ['Privacy', 'Monetize', 'Both'];
  const GetSelected = value => {
    setselectedvalue(value);
  };
  const updateshow = () => {
    if (Selectedvalue === '') {
      setshowValidpop(!showValidpop);
    } else {
      setPopModal(true);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#181A20'}}>
      <View style={{marginTop: hp('2.8%')}}>
        <BackArrow isReg />
      </View>

      <View
        style={{
          height: hp('22%'),
          width: wp('22%'),
          overflow: 'hidden',
          marginLeft: wp('5%'),
        }}>
        <Image
          source={require('../../Assets/Images/groupd4.png')}
          style={{resizeMode: 'contain', height: '100%', width: '100%'}}
        />
      </View>
      <View style={Styles.FontHeadCon}>
        <Text style={Styles.headfont}>Lets share you</Text>
        <Text style={Styles.headfont}>business wording</Text>
      </View>
      <SelectionBtn selection={selection} GetSelected={GetSelected} />

      {!showValidpop ? (
        // <TransparentButton
        //   onPress={updateshow}
        //   title="Got it"
        //   style={{
        //     width: wp('85%'),
        //     height: hp('7.3%'),
        //     backgroundColor: '#246BFD',
        //     borderColor: '#246BFD',
        //     // marginLeft: ,
        //     marginLeft: wp('7%'),
        //     marginTop: hp('5%'),
        //   }}
        //   textStyle={{fontWeight: 'bold', fontSize: 14}}
        // />
        <Button handleFunction={updateshow} btnText={'Got it'} />
      ) : null}

      {PopModal && (
        <PopupModal
          visible={true}
          children={
            'You have registered your Swap account. Have a good use of the app.'
          }
          height={'55%'}
          onPress={() => navigation.navigate('OnBoarding')}
        />
      )}
      {showValidpop == true && (
        <ValidationPopup Show={true} showback={updateshow} />
      )}
    </View>
  );
};

export default AcceptTerm;
