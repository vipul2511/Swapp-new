import {StyleSheet,Dimensions} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height
export default StyleSheet.create({
    container: {
        height: hp('8%'),
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    img: {
        position:'absolute',
        width:wp('6%'),
        marginLeft:'4%',
        height:'100%',
        resizeMode: 'contain'
    }
})
