import {StyleSheet,Dimensions} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height
export default StyleSheet.create({
    container: {
        marginTop:hp('2%'),
        height: hp('12%'),
        display: 'flex',
        width:wp('90%'),
        alignSelf:'center',
        justifyContent:'space-between'
    },
    title: {
        color:'white',
        fontSize:wp('10%'),
    },
    text: {
        width:wp('60%'),
        color:'gray',
        fontSize:wp('3.8%'),
    },
})
