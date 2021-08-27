import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const index = ({navigation}) => {
  const [password, setPassword] = useState(['', '', '', '', '']);
  const [biometryType, setbiometryType] = useState(null);
  let Numbers = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 0},
  ];

  const OnPressNumber = num => {
    let tempCode = password;
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == '') {
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    setPassword([...tempCode]);
  };

  const OnpressCancel = () => {
    let tempCode = password;
    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] !== '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    setPassword([...tempCode]);
  };

  // useEffect(() => {
  // FingerprintScanner.isSensorAvailable()

  return (
    <>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white'}}>Create passcode</Text>
      </View>
      <View style={styles.CodeCon}>
        {password.map((p, index) => {
          let style = p !== '' ? styles.Code2 : styles.Code1;
          return <View style={style} key={index} />;
        })}
      </View>
      <View style={styles.NumberCon}>
        {/* <Text>{biometryType}</Text> */}
        {Numbers.map(({id, index}) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.Number}
                onPress={() => OnPressNumber(id)}>
                <Text style={styles.NumberText}>{id}</Text>
              </TouchableOpacity>
            </View>
          );
        })}

        <View style={{position: 'absolute', bottom: hp('3%'), left: wp('15%')}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateNewPassword1')}>
            <Image source={require('../../Assets/Images/TouchId.png')} />
          </TouchableOpacity>
        </View>
        <View
          style={{position: 'absolute', bottom: hp('5%'), right: wp('15%')}}>
          <TouchableOpacity onPress={OnpressCancel}>
            <Image source={require('../../Assets/Images/BackText.png')} />
          </TouchableOpacity>
        </View>
        {/* -------------- */}

        {/* --------------------- */}
      </View>
    </>
  );
};

export default index;
