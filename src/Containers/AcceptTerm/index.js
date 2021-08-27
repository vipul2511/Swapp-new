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
import './styles';
import Styles from './styles';

const AcceptTerm = ({navigation}) => {
  const [showValidpop, setshowValidpop] = React.useState(false);
  const [Selectedvalue, setselectedvalue] = React.useState('');
  const selection = ['Privacy', 'Monetize', 'Both'];
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
    <View style={Styles.Container}>
      {/* <StatusBar translucent={true} backgroundColor={'transparent'} /> */}
      <Header navigation={navigation} />
      <View style={Styles.Imgcon}>
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
        <TransparentButton
          onPress={updateshow}
          title="Got it"
          style={Styles.Transpbtn}
          textStyle={{
            fontWeight: 'bold',
            fontSize: 14,
            fontFamily: 'Inter-Regular',
          }}
        />
      ) : null}

      {showValidpop === true && (
        <ValidationPopup Show={true} showback={updateshow} />
      )}
    </View>
  );
};

export default AcceptTerm;
