import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import styles from './Styles';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import ReactNativeBiometrics from 'react-native-biometrics';

const PinCodeScreen = ({navigation}) => {
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
    setPassword(tempCode);
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
    setPassword(prevState => console.log(prevState));
  };

  useEffect(() => {
    // FingerprintScanner.isSensorAvailable()
    //   .then(bioType => {
    //     this.setState({bioType});
    //   })
    //   .catch(error => console.log('isSensorAvailable error => ', error));

    ReactNativeBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryTyp} = resultObject;

      if (available && biometryTyp === ReactNativeBiometrics.TouchID) {
        console.log('TouchID is supported');
      } else if (available && biometryTyp === ReactNativeBiometrics.FaceID) {
        console.log('FaceID is supported');
      } else if (
        available &&
        biometryTyp === ReactNativeBiometrics.Biometrics
      ) {
        console.log('Biometrics is supported');
      } else {
        console.log(biometryTyp + 'check' + available);

        console.log('Biometrics not supported');
      }
    });
  }, []);

  const Getmessage = () => {
    // console.log()
    const bioType = biometryType;
    if (bioType === 'Face ID') {
      return 'Scan your Face on the device to continue';
    } else {
      return 'Scan your Fingerprint on the device scanner to continue';
    }
  };

  const showAuthenticationDialog = () => {
    console.log('showau');
    const bioType = biometryType;

    if (bioType !== null && bioType !== undefined) {
      FingerprintScanner.authenticate({
        description: Getmessage(),
      })
        .then(() => {
          //you can write your logic here to what will happen on successful authentication
        })
        .catch(error => {
          console.log('Authentication error is => ', error);
        });
    } else {
      console.log('biometric authentication is not available');
    }
  };

  return (
    <>
      <View style={styles.MainCon}>
        <View style={styles.ImageCon}>
          <Image source={require('../../Assets/Images/Group46300.png')} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#5E6272'}}>Enter PIN code</Text>
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
              <TouchableOpacity
                style={styles.Number}
                key={index}
                onPress={() => OnPressNumber(id)}>
                <Text style={styles.NumberText}>{id}</Text>
              </TouchableOpacity>
            );
          })}

          <View
            style={{position: 'absolute', bottom: hp('3%'), left: wp('20%')}}>
            <TouchableOpacity onPress={showAuthenticationDialog}>
              <Image source={require('../../Assets/Images/TouchId.png')} />
            </TouchableOpacity>
          </View>
          <View
            style={{position: 'absolute', bottom: hp('5%'), right: wp('20%')}}>
            <TouchableOpacity onPress={OnpressCancel}>
              <Image source={require('../../Assets/Images/BackText.png')} />
            </TouchableOpacity>
          </View>
          {/* -------------- */}

          {/* --------------------- */}
        </View>
      </View>
    </>
  );
};

export default PinCodeScreen;
