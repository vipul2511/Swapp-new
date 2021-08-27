import React, {useState} from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView, Modal, Pressable,
    SafeAreaView,
    StatusBar,
    Text,
    View
} from "react-native";
import styles from './Styles';
import Button from "../../../Components/CreatingAccount/Button";
import BackArrow from "../../../Components/CreatingAccount/BackArrow";
import TermsOfUse from "../TermsOfUse";
import { BlurView, VibrancyView } from "react-native-blur";

const PointBlock = (props) => {
    const { text } = props;
    return (
        <View style={styles.pointContainer}>
            <Image
                style={styles.pointImg}
                source={require('../../../Assets/Images/Check.png')}
            />
            <Text style={styles.pointText}>{text}</Text>
        </View>
    )
}

const ThreeThingsScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
            {
                modalVisible &&
                <BlurView style={{
                    position:'absolute',
                    zIndex:9999,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }}
                          reducedTransparencyFallbackColor="#0000ffff"
                          blurType="dark"
                          blurAmount={10}
                />
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TermsOfUse setModalVisible={setModalVisible}/>
            </Modal>

            <StatusBar backgroundColor="#181A20" barStyle="light-content" />
            <BackArrow isReg/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Three things you should know</Text>
            </View>

            <View style={styles.pointsBlock}>
                <PointBlock text={'No one can see the data you import, only you hold the key!'}/>
                <PointBlock text={'Your data is not held by us, you decide where it lives'}/>
                <PointBlock text={'Your data can only be shared with your explicit consent'}/>
            </View>

            <View style={styles.signatureContainer}>
                <Image
                    style={styles.signatureImg}
                    source={require('../../../Assets/Images/signature.png')}
                />
            </View>


            <Button handleFunction={() => navigation.navigate('RecoveryPhaseScreen')} btnText={'Read the terms of use'}/>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ThreeThingsScreen;
