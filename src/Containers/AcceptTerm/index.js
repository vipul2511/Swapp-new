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

const AcceptTerm = ({navigation}) => {
  const [showValidpop, setshowValidpop] = React.useState(false);
  const [Selectedvalue, setselectedvalue] = React.useState('');
  // const [show, setshowValidpop] = React.useState(false);
  const selection = ['Privacy', 'Monetize', 'Both'];
  // console.warn(show);
  const GetSelected = value => {
    setselectedvalue(value);
  };
  const updateshow = () => {
    if (Selectedvalue === '') {
      setshowValidpop(!showValidpop);
    } else {
      return null;
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#2C303A'}}>
      {/* <StatusBar translucent={true} backgroundColor={'transparent'} /> */}
      <Header navigation={navigation}/>
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
        <Text style={{fontSize: 32, color: 'white', fontWeight: 'bold'}}>
          Lets share you
        </Text>
        <Text style={{fontSize: 32, color: 'white', fontWeight: 'bold'}}>
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

      {/* </TouchableOpacity> */}
      {/* <View style={{backgroundColor:'red',marginHorizontal:20,borderWidth:1,borderColor:'pink',shadowColor:'blue',elevation:20}}><Text>dash</Text></View> */}

      {/* <ValidationPopup Show={true} /> */}
      {showValidpop == true && (
        <ValidationPopup Show={true} showback={updateshow} />
      )}
    </View>
  );
};

export default AcceptTerm;
