import React from 'react';
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
const AcceptTerm = ({navigation}) => {
  const [showValidpop, setshowValidpop] = React.useState(false);
  const [Selectedvalue, setselectedvalue] = React.useState('');
  const [showModal,setshowModal]=React.useState(false);
  const selection = ['Privacy', 'Monetize', 'Both'];
  const GetSelected = value => {
    setselectedvalue(value);
  };
  const updateshow = () => {
    if (Selectedvalue === '') {
      setshowValidpop(!showValidpop);
    } else {
      navigation.navigate('PinScreen')
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#2C303A'}}>
      <View style={{marginTop:hp('5%')}}>
      <Header navigation={navigation}/>
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
      <View
        style={{
          marginLeft: wp('5%'),
          marginBottom: wp('5%'),
          marginTop: wp('-2%'),
        }}>
        <Text style={{fontSize: 32, color: 'white', fontWeight: '600'}}>
          Lets share you
        </Text>
        <Text style={{fontSize: 32, color: 'white', fontWeight: '600'}}>
          business wording
        </Text>
      </View>
      <SelectionBtn selection={selection} GetSelected={GetSelected} />

      {!showValidpop ? (
        <TransparentButton
          onPress={updateshow}
          title="Got it"
          style={{
            width: wp('85%'),
            height: hp('7.3%'),
            backgroundColor: '#246BFD',
            borderColor: '#246BFD',
            // marginLeft: ,
            marginLeft: wp('7%'),
            marginTop: hp('5%'),
          }}
          textStyle={{fontWeight: 'bold', fontSize: 14}}
        />
      ) : null}

 {/* {showModal&&<PopupModal visible={true} onPress={()=>navigation.navigate('PinScreen')}  />} */}
      {showValidpop == true && (
        <ValidationPopup Show={true} showback={updateshow} />
      )}
    </View>
  );
};

export default AcceptTerm;
