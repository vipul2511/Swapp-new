import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomIinput = ({
  header,
  value,
  onchange,
  placeholder,
  securetext,
  fontstyle,
}) => {
  const [focus, setfoucs] = useState(false);
  const [inputval, setInputval] = useState('');
  const [isshow, setIsShow] = useState(false);

  const updatefocus = () => {
    setfoucs(false);
    setfoucs(!focus);
  };
  React.useEffect(() => {
    // console.log(focus)
  }, [focus]);

  const InputValueHandler = e => {
    setInputval(e);
  };
  console.log(inputval);

  return (
    <View>
      <View style={{marginTop: hp('4%')}}>
        <Text
          style={[
            
            focus ? styles.activeheadertext : styles.disableheadertext,fontstyle
          ]}>
          {header}
        </Text>
      </View>
      {securetext ? (
        <TouchableOpacity
          onPress={() => {
            setIsShow(!isshow);
          }}
          style={{
            height: 20,
            width: 20,
            overflow: 'hidden',
            position: 'absolute',
            right: wp('1%'),
            top: hp('8%'),
            zIndex: 100,
          }}>
          {isshow ? (
            <Image
              source={require('../../Assets/Images/Hide.png')}
              style={{resizeMode: 'contain', height: '100%', width: '100%'}}
            />
          ) : (
            <Image
              source={require('../../Assets/Images/Show.png')}
              style={{resizeMode: 'contain', height: '100%', width: '100%'}}
            />
          )}
        </TouchableOpacity>
      ) : null}

      {securetext ? (
        <TextInput
          value={inputval}
          secureTextEntry={isshow}
          onChangeText={e => InputValueHandler(e)}
          // placeholder="Input empty"
          placeholder={placeholder}
          style={[
            focus ? styles.activeheader : styles.disableheader,
            {
              // color: '#5E6272',
              marginTop: hp('1.5%'),
              height: Platform.OS === 'ios' ? hp('5%') : hp('5%'),
            },
          ]}
          // style={[focus ? styles.activeheader : styles.disableheader]}

          placeholderTextColor="#5E6272"
          onFocus={updatefocus}
          onBlur={updatefocus}
        />
      ) : (
        <TextInput
          value={inputval}
          onChangeText={e => InputValueHandler(e)}
          // placeholder="Input empty"
          placeholder={placeholder}
          style={[
            focus ? styles.activeheader : styles.disableheader,
            {
              // color: '#5E6272',
              marginTop: hp('1.5%'),
              height: Platform.OS === 'ios' ? hp('5%') : hp('5%'),
            },
          ]}
          // style={[focus ? styles.activeheader : styles.disableheader]}

          placeholderTextColor="#5E6272"
          onFocus={updatefocus}
          onBlur={updatefocus}
        />
      )}
      <View
        style={
          ({marginTop: hp('1.5%')},
          [focus ? styles.activeborder : styles.disableborder])
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activeborder: {
    borderBottomColor: '#246BFD',
    shadowColor: '#246BFD',

    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 10,
    borderBottomWidth: 1.5,
  },

  disableborder: {
    borderBottomColor: '#5E6272',

    borderBottomWidth: 1.5,
  },
  activeheader: {
    color: 'white',
    fontSize: 16,
  },
  activeheadertext: {
    fontSize: 10,
    color: 'white',
  },
  disableheadertext: {
    fontSize: 10,
    color: '#5E6272',
  },
  disableheader: {
    color: '#5E6272',
    fontSize: 16,
  },
});
export default CustomIinput;
