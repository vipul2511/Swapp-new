import React, {useRef, useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View,
} from "react-native";
import styles from './Styles';
import Button from "../../../Components/CreatingAccount/Button";
import BackArrow from "../../../Components/CreatingAccount/BackArrow";
import uuid from 'react-native-uuid';
import {useRoute} from '@react-navigation/native';
const WordButton = (props) => {
    const { wordItem, handleAddWord } = props;
    const { word, isSelected, id } = wordItem;
    return (
        <TouchableOpacity onPress={() => handleAddWord(id)} style={[styles.wordBtnContainer, {borderColor: isSelected ? '#303136' : '#5E6272'}]}>
            <Text style={[styles.wordBtnText, {color: isSelected ? '#303136' : '#FFFFFF'}]}>{word}</Text>
        </TouchableOpacity>
    )
}

const AttachedWord = (props) => {
    const { wordItem, handleDeleteWord } = props;
    const { word, id } = wordItem;

    return (
        <View style={styles.attachedWordContainer}>
            <Text style={styles.attachedWordText}>{word}</Text>
            <TouchableOpacity onPress={() => handleDeleteWord(id)}>
                <Image
                    style={styles.closeIcon}
                    source={require('../../../Assets/Images/closeIcon.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const TypeWordPhrase = (props) => {
    const [ word, setWord ] = useState('');
    const [ isError, setIsError ] = useState(false);
    const route = useRoute();
    const [ words, setWords ] = useState([
        { id:1, word: 'asute'},
        { id:2, word: 'equitove'},
        { id:3, word: 'femce'},
    ]);
    const refInput = useRef();

    const handleAddWord = () => {
        if(!word) return
        setWords([...words, {id: uuid.v4(), word: word}]);
        setWord('')
    }

    const handleDeleteWord = (id) => {
        setWords(words.filter(el => el.id !== id));
    }

    const sendWords = () => {
        setIsError(true)
        props.navigation.navigate('CreateNewPassword',{InitalScreen: route?.params?.InitalScreen})
    }

    const touchWordBlock = () => {
        refInput.current.focus();
        setIsError(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView keyboardVerticalOffset={StatusBar.currentHeight} behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                <StatusBar backgroundColor="#181A20" barStyle="light-content" />
                <BackArrow navigation={props.navigation}/>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Type your 12-Word Phase</Text>
                    <Text style={styles.text}>Enter the words below to make sure you’ve stored your recovery phrase correctly</Text>
                </View>

                <TouchableWithoutFeedback onPress={touchWordBlock}>
                    <View style={[styles.wordBoard, {borderColor: isError ? '#FF0B80' : '#5E6272'}]}>
                        { words.map(wordItem => <AttachedWord handleDeleteWord={handleDeleteWord} wordItem={wordItem}/>) }
                        <TextInput
                            ref={refInput}
                            value={word}
                            onSubmitEditing={handleAddWord}
                            onChangeText={(e) => {
                                setWord(e)
                            }}
                            style={styles.inputWord}
                        ></TextInput>
                    </View>
                </TouchableWithoutFeedback>
                {
                    isError && <Text style={styles.errorMessage}>Invaid Secret Recovery Phase</Text>
                }

                <Button disabled={isError} handleFunction={sendWords} btnText={'Confirm'}/>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default TypeWordPhrase;
