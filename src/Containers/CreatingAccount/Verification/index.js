import React, {useState} from 'react';
import {
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
import Title from "../../../Components/CreatingAccount/Title";

const CELL_COUNT = 4;

const Verification = ({navigation}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView keyboardVerticalOffset={StatusBar.currentHeight} behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
            <StatusBar backgroundColor="#181A20" barStyle="light-content" />
            <BackArrow />

            <Title title={'Email verification'} text={'We have sent code to you email:'}/>
            <Text style={styles.email}>Bel***ms@gmail.com</Text>

            <View style={styles.inputBlock}>
                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({index, symbol, isFocused}) => (
                        <View
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            <Text style={styles.digit}>
                                {symbol || null}
                            </Text>
                            {
                                isFocused &&
                                <View style={{width:'70%', alignSelf:'center', height:2, backgroundColor:'#246BFD', position:'absolute', bottom:10}}></View>
                            }
                        </View>
                    )}
                />

                <View style={styles.additionalPostscript}>
                    <Text style={styles.additionalPostscriptTitle}>Didn’t receive code?</Text>
                    <TouchableOpacity>
                        <Text style={styles.additionalPostscriptBtnText}> Resend</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Button handleFunction={()=>navigation.navigate('CreateNewPassword')} btnText={'Verify account'}/>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Verification;
