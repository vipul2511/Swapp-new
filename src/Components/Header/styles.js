import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  HeaderCon: {flexDirection: 'row', marginTop: hp('2%')},
  HeaderTextCon: {alignItems: 'center', justifyContent: 'center', flex: 1},
  HeaderText: {
    marginRight: wp('14%'),
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',

    color: 'white',
  },
});

export default styles;
