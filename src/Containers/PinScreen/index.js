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
import PopupModal from '../../Components/PopupModal';
const PinCodeScreen = ({navigation}) => {
  const [password, setPassword] = useState(['', '', '', '', '']);
  const [biometryType, setbiometryType] = useState('');
  const [showModal, setShowModal] = useState(false);
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
    if (tempCode[4] != '') {
      navigation.navigate('EnterPassword');
    }
    setPassword(prePassword => [...tempCode]);
  };

  const OnpressCancel = () => {
    let tempCode = password;
    if (password != ['', '', '', '', '']) {
      for (var i = tempCode.length - 1; i >= 0; i--) {
        if (tempCode[i] !== '') {
          tempCode[i] = '';
          break;
        } else {
          continue;
        }
      }
      setPassword(prePassword => [...tempCode]);
    }
  };

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then(bioType => {
        setbiometryType(bioType);
        if (bioType == 'Biometrics') {
          showAuthenticationDialog();
        }
        if (bioType == 'TouchID') {
          showAuthenticationDialog();
        }
        if (bioType == 'Face ID') {
          showAuthenticationDialog();
        }
      })
      .catch(error => console.log('isSensorAvailable error => ', error));
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
    const bioType = biometryType;

    if (bioType !== null && bioType !== undefined) {
      FingerprintScanner.authenticate({
        description: Getmessage(),
      })
        .then(() => {
          setShowModal(true);
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

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.ImageCon}>
            <Image
              source={require('../../Assets/Images/Group46300.png')}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#5E6272', fontFamily: 'Inter-Regular'}}>
            Enter PIN code
          </Text>
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
            style={{position: 'absolute', bottom: hp('2%'), left: wp('15%')}}>
            <TouchableOpacity onPress={showAuthenticationDialog}>
              <View style={{height: 50, width: 50, overflow: 'hidden'}}>
                <Image
                  source={require('../../Assets/Images/TouchId.png')}
                  style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{position: 'absolute', bottom: hp('3%'), right: wp('15%')}}>
            <TouchableOpacity onPress={OnpressCancel}>
              <View style={{height: 35, width: 35, overflow: 'hidden'}}>
                <Image
                  source={require('../../Assets/Images/BackText.png')}
                  style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                />
                {/* <Image source={require('../../Assets/Images/BackText.png')} /> */}
              </View>
            </TouchableOpacity>
          </View>
          {showModal && (
            <PopupModal
              visible={true}
              onPress={() => navigation.navigate('CreateNewPassword')}
            />
          )}
          {/* -------------- */}

          {/* --------------------- */}
        </View>
      </View>
    </>
  );
};

export default PinCodeScreen;
