import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import styles from './Styles';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from '../../../Components/CreatingAccount/Button';
import BackArrow from '../../../Components/CreatingAccount/BackArrow';
import Title from '../../../Components/CreatingAccount/Title';
import {connect} from 'react-redux';

const CELL_COUNT = 4;

const Verification = props => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [propsCode, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const sendCode = () => {
    props.sendCode({
      email: props.auth.email,
      code: value,
    });
  };

  useEffect(() => {
    return () => {
      props.eraseCodeError();
    };
  }, []);

  useEffect(() => {
    if (props.auth.isAuth) {
      props.navigation.navigate('ThreeThingsScreen');
    }
  }, [props.auth]);

  return (
    <SafeAreaView style={styles.container}>
      {props.auth.loader ? (
        <ActivityIndicator style={{flex: 1}} size="large" color="#246BFD" />
      ) : (
        <KeyboardAvoidingView
          keyboardVerticalOffset={StatusBar.currentHeight}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <StatusBar backgroundColor="#181A20" barStyle="light-content" />
          <BackArrow navigation={props.navigation} />

          <Title
            title={'Email verification'}
            text={'We have sent code to you email:'}
          />
          <Text style={styles.email}>Bel***ms@gmail.com</Text>

          <View style={styles.inputBlock}>
            <CodeField
              ref={ref}
              {...propsCode}
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
                  style={[
                    styles.cell,
                    {borderColor: props.auth.codeError ? '#FF0B80' : '#5E6272'},
                    isFocused && styles.focusCell,
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  <Text style={styles.digit}>{symbol || null}</Text>
                  {isFocused && (
                    <View
                      style={{
                        width: '70%',
                        alignSelf: 'center',
                        height: 2,
                        backgroundColor: '#246BFD',
                        position: 'absolute',
                        bottom: 10,
                      }}
                    />
                  )}
                </View>
              )}
            />

            <View style={styles.additionalPostscript}>
              <Text style={styles.additionalPostscriptTitle}>
                Didn’t receive code?
              </Text>
              <TouchableOpacity>
                <Text style={styles.additionalPostscriptBtnText}> Resend</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Button handleFunction={sendCode} btnText={'Verify account'} />
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  sendCode: data => {
    dispatch({type: 'SEND_CODE', data});
  },
  eraseCodeError: () => {
    dispatch({type: 'ERASE_CODE_ERROR'});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Verification);
