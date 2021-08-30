import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  MainCon: {backgroundColor: '#181A20', flex: 1},
  ImageCon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('7%'),
  },
  CodeCon: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('35%'),
    marginTop: hp('4%'),
  },
  Code1: {height: 10, width: 10, borderRadius: 20, backgroundColor: '#262A34'},
  Code2: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: '#246BFD',
    shadowColor: '#246BFD',
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 12,

    elevation: 20,
  },

  NumberCon: {
    marginTop: hp('10%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Number: {
    width: wp('30%'),
    height: hp('13%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  NumberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
