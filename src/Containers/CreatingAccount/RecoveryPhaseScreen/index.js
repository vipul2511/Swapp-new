import React, {useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import styles from './Styles';
import {
    CodeField,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from "../../../Components/CreatingAccount/Button";
import BackArrow from "../../../Components/CreatingAccount/BackArrow";

const Word = (props) => {
    const { text, n } = props;
    return (
        <View style={styles.wordContainer}>
            <Text style={styles.number}>{n}</Text>
            <Text style={styles.word}>{text}</Text>
        </View>
    )
}

const RecoveryPhaseScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
            <StatusBar backgroundColor="#181A20" barStyle="light-content" />
            <BackArrow />

            <View>
                <Image
                    style={styles.img}
                    source={require('../../../Assets/Images/lock.png')}
                />
            </View>

            <Text style={styles.title}>Your recovery phase</Text>
            <Text style={styles.text}>Write down or copy these words in the righ order and save them somwhere safe.</Text>

            <View style={styles.wordsBlock}>
                <Word text={'fence'} n={'1'}/>
                <Word text={'fencedsf'} n={'1'}/>
                <Word text={'fencwer'} n={'1'}/>
                <Word text={'fesdfnce'} n={'1'}/>
                <Word text={'fee'} n={'1'}/>
                <Word text={'fendsfdfce'} n={'1'}/>
                <Word text={'fsdf'} n={'1'}/>
                <Word text={'fen'} n={'1'}/>
                <Word text={'fence'} n={'1'}/>
            </View>

            <View style={styles.warning}>
                <View style={styles.warningIconContainer}>
                    <Image
                        style={styles.dangerIcon}
                        source={require('../../../Assets/Images/Danger.png')}
                    />
                </View>

                <View style={styles.warningTextContainer}>
                    <Text style={styles.warningText}>Never share recovery phase with anyone, store it securely!</Text>
                </View>
            </View>

            <View style={styles.btnContainer}>
                <Button btnText={'Copy'} isTransparent/>
                <Button handleFunction={()=>navigation.navigate('ConfirmBackupPhaseScreen')} btnText={'Download file'}/>
            </View>

        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RecoveryPhaseScreen;
