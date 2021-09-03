import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './Styles';
import Button from '../../../Components/CreatingAccount/Button';
import BackArrow from '../../../Components/CreatingAccount/BackArrow';
import PopupModal from '../../../Components/PopupModal';
import Icon from 'react-native-vector-icons/FontAwesome';
// import d from '../../../Assets/'
const WordButton = props => {
  const {wordItem, handleAddWord} = props;
  const {word, isSelected, id} = wordItem;
  return (
    <TouchableOpacity
      onPress={() => handleAddWord(id)}
      style={[
        styles.wordBtnContainer,
        {borderColor: isSelected ? '#303136' : '#5E6272'},
      ]}>
      <Text
        style={[
          styles.wordBtnText,
          {color: isSelected ? '#303136' : '#FFFFFF'},
        ]}>
        {word}
      </Text>
    </TouchableOpacity>
  );
};

const AttachedWord = props => {
  const {wordItem, handleDeleteWord} = props;
  const {word, id} = wordItem;
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
  );
};

const ConfirmBackupPhaseScreen = props => {
  const [words, setWords] = useState([
    {id: 1, word: 'asute', isSelected: false},
    {id: 2, word: 'equitove', isSelected: false},
    {id: 3, word: 'femce', isSelected: false},
    {id: 4, word: 'fagine', isSelected: false},
    {id: 5, word: 'goose', isSelected: false},
    {id: 6, word: 'finish', isSelected: false},
    {id: 7, word: 'nature', isSelected: false},
    {id: 8, word: 'nest', isSelected: false},
    {id: 9, word: 'pissa', isSelected: false},
    {id: 10, word: 'reval', isSelected: false},
    {id: 11, word: 'second', isSelected: false},
    {id: 12, word: 'sequese', isSelected: false},
  ]);
  const [checkedWords, setCheckedWords] = useState([]);
  const [validate, setvalidate] = useState(false);
  const [showModal, setshowModal] = React.useState(false);
  const [init, setinit] = useState(false);

  const handleAddWord = id => {
    setWords(words.map(el => (el.id === id ? {...el, isSelected: true} : el)));
    let checkedWord = words.find(el => el.id == id);
    checkedWord.isSelected == false &&
      setCheckedWords([...checkedWords, checkedWord]);
  };

  const handleDeleteWord = id => {
    setWords(words.map(el => (el.id === id ? {...el, isSelected: false} : el)));
    setCheckedWords(checkedWords.filter(el => el.id !== id));
  };

  React.useEffect(() => {
    if (checkedWords.length === 12) {
      setvalidate(true);
    } else {
      setvalidate(false);
    }
  }, [checkedWords]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <StatusBar backgroundColor="#181A20" barStyle="light-content" />
        <BackArrow />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Confirm your Secret Backup Phase</Text>
          <Text style={styles.text}>
            Pleace select each phase in order to make sure it is correct.
          </Text>
        </View>

        <View
          style={[
            //   {borderColor:'pink'},
            styles.wordBoard,
            // validate ? styles.disableborder : styles.activeborder,
            init
              ? validate
                ? styles.disableborder
                : styles.activeborder
              : null,
          ]}>
          {checkedWords.map(wordItem => (
            <AttachedWord
              handleDeleteWord={handleDeleteWord}
              wordItem={wordItem}
            />
          ))}
        </View>

        <View style={styles.wordBtnBlock}>
          {words.map(wordItem => (
            <WordButton wordItem={wordItem} handleAddWord={handleAddWord} />
          ))}
        </View>

        {validate ? (
          <Button
            handleFunction={() => {
              setshowModal(true);
            }}
            btnText={'Complete'}
          />
        ) : (
          <Button
            handleFunction={() => setinit(true)}
            btnText={'Complete'}
            style
          />
        )}
        {showModal && (
          <PopupModal
            btncon={{marginVertical: hp('3%')}}
            visible={true}
            btntext={'Get started!'}
            children={
              'You have successfully protected your Swapp! Please keep you back-up phrase safe and sound.'
            }
            height={'57%'}
            onPress={() => props.navigation.navigate('NameScreen')}
            img={
              <View
                style={{
                  height: hp('23%'),
                  width: wp('100%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  resizeMode="contain"
                  source={require('../../../Assets/Images/checkcircle.png')}
                  style={{
                    height: hp('20%'),
                    width: wp('35%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="check"
                    // backgroundColor="white"
                    color="white"
                    size={50}

                    // onPress={this.loginWithFacebook}
                  />
                </ImageBackground>
              </View>
            }
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ConfirmBackupPhaseScreen;
