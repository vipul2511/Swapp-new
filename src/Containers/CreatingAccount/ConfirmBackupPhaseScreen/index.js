import React, {useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Text, TouchableOpacity, View,
} from "react-native";
import styles from './Styles';
import Button from "../../../Components/CreatingAccount/Button";
import BackArrow from "../../../Components/CreatingAccount/BackArrow";

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
                    source={require('../../../Assets/Images/CloseSquare.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const ConfirmBackupPhaseScreen = (props) => {
    const [ words, setWords ] = useState([
        { id:1, word: 'asute', isSelected: false},
        { id:2, word: 'equitove', isSelected: false},
        { id:3, word: 'femce', isSelected: false},
        { id:4, word: 'fagine', isSelected: false},
        { id:5, word: 'goose', isSelected: false},
        { id:6, word: 'finish', isSelected: false},
        { id:7, word: 'nature', isSelected: false},
        { id:8, word: 'nest', isSelected: false},
        { id:9, word: 'pissa', isSelected: false},
        { id:10, word: 'reval', isSelected: false},
        { id:11, word: 'second', isSelected: false},
        { id:12, word: 'sequese', isSelected: false},
    ]);
    const [ checkedWords, setCheckedWords ] = useState([]);

    const handleAddWord = (id) => {
        setWords(words.map(el => el.id === id ? { ...el, isSelected: true} : el));
        let checkedWord = words.find(el => el.id == id)
        checkedWord.isSelected == false && setCheckedWords([...checkedWords, checkedWord])
    }

    const handleDeleteWord = (id) => {
        setWords(words.map(el => el.id === id ? { ...el, isSelected: false} : el));
        setCheckedWords(checkedWords.filter(el => el.id !== id))
    }

    return (
        <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
            <StatusBar backgroundColor="#181A20" barStyle="light-content" />
            <BackArrow />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Confirm your Secret Backup Phase</Text>
                <Text style={styles.text}>Pleace select each phase in order to make sure it is correct.</Text>
            </View>

            <View style={styles.wordBoard}>
                { checkedWords.map(wordItem => <AttachedWord handleDeleteWord={handleDeleteWord} wordItem={wordItem}/>) }
            </View>

            <View style={styles.wordBtnBlock}>
                {
                    words.map(wordItem => (
                        <WordButton wordItem={wordItem} handleAddWord={handleAddWord}/>
                    ))
                }
            </View>

            <Button handleFunction={()=>props.navigation.navigate('NameScreen')} btnText={'Confirm'}/>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ConfirmBackupPhaseScreen;
