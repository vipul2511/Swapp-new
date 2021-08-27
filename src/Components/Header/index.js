import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Styles from './styles';

const Header = ({navigation}) => {
  return (
    <View style={Styles.HeaderCon}>
      <View>
        <TouchableOpacity
          style={{marginLeft: wp('5%')}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../Assets/Images/ArrowLeft.png')} />
        </TouchableOpacity>
      </View>
      <View style={Styles.HeaderTextCon}>
        <Text style={Styles.HeaderText}>Registration</Text>
      </View>
    </View>
  );
};

export default Header;
