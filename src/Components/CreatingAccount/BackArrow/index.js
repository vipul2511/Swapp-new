import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from './styles';

const BackArrow = (props) => {
    const { isReg } = props;
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('../../../Assets/Images/arrow.png')}
            />
            {
                isReg &&
                <View style={{ width:'100%'}}>
                    <Text style={{color:'white', fontSize:26, textAlign:'center'}}>Registration</Text>
                </View>
            }
        </View>
    )
}

export default BackArrow;
