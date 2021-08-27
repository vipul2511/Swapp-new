import React from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    View
} from "react-native";
import styles from './Styles';
import BackArrow from "../../../Components/CreatingAccount/BackArrow";
import Title from "../../../Components/CreatingAccount/Title";
import Button from "../../../Components/CreatingAccount/Button";

const EnterEmailPhoneScreen = ({navigation}) => {
    function handleFunction(){
        navigation.navigate('Verification')
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView keyboardVerticalOffset={StatusBar.currentHeight} behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
            <StatusBar backgroundColor="#181A20" barStyle="light-content" />
                <BackArrow />

                <Title title={'Create your Swapp'} text={'We will send verification code on your email ID.'}/>

               <View style={styles.inputBlock}>
                   <Text style={styles.inputTitle}>ENTER YOUR EMAIL</Text>
                   <TextInput
                       style={styles.input}
                   />
               </View>

                <Button handleFunction={()=>handleFunction()} btnText={'Send Verification Code'}/>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default EnterEmailPhoneScreen;
