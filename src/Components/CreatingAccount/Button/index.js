import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from './styles';

const Button = (props) => {
    const { btnText, isTransparent,style, handleFunction } = props;
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.button, isTransparent ? {
                    backgroundColor: '#ffffff00',
                    borderWidth: 1,
                    borderColor: '#5E6272',
                } : {backgroundColor: style?'#262A34':'#246BFD'}]}
                onPress={() => {handleFunction()}}
            >
                <Text style={[styles.buttonText,{color:style?'#3A3D46':'white'}]}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;
