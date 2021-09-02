import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const BackArrow = (props) => {
    const navigation = useNavigation();
    const { isReg } = props;
    return (
        <TouchableOpacity style={styles.container} onPress={()=>{navigation.goBack()}}>
            <Image
                style={styles.img}
                source={require('../../../Assets/Images/arrow.png')}
            />
            {
                isReg &&
                <View style={{ width:'100%'}}>
                    <Text style={{color:'white',marginTop:heightPercentageToDP('1%') ,fontSize:widthPercentageToDP('4.5%'),fontFamily:'Poppins-SemiBold' ,textAlign:'center'}}>Registration</Text>
                </View>
            }
        </TouchableOpacity>
    )
}

export default BackArrow;
