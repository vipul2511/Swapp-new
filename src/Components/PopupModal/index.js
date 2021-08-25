


import React, { useState } from "react";
import { Alert, Modal, StyleSheet,Image, Text, Pressable, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TransparentButton from '../../Components/TransparentButton';

const PopupModal = ({visible}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.centeredView]}>
          <View style={styles.modalView}>
          
      <View style={{height:hp('23%'),width:wp('100%'),justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../../Assets/Images/ModalImage.png')} style={{height:hp('20%'),width:wp('45%'),justifyContent:'center',alignItems:'center'}} />
      </View>
             <View style={{marginVertical:hp('1%')}}>
            <Text style={styles.modalText}>Congratulations!</Text>
            <View style={{width:wp('85%')}}>
              <Text style={styles.modalText2}>
              You received <Text style={{color:'#246BFD'}} >30 swapp coins </Text> for registering in the app! Use the application, get data points to get even more coins.
              </Text>
            </View>
            <View style={{marginVertical:hp('5%')}}>
            <TransparentButton title="Get start!" onPress={()=>{setModalVisible(false)}} style={{width:wp('85%'),height:hp('7.3%'),backgroundColor:'#246BFD',borderColor: null}} textStyle={{fontWeight:'bold'}}/>
            </View>
          </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[stylesd.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={stylesd.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor:'rgba( 0, 0, 0, 0.9 )',
    
  },
  modalText2:{
  color:'#5E6272',
  fontSize:wp('4.4%'),
  lineHeight:hp('4%'),
  textAlign:'center'
  },
  modalView: {
    // margin: 10,
    width:wp('100%'),height:hp('60%'),
    backgroundColor: "#262A34",
    borderColor:"#3A3D46",
    borderRadius: 20,
    // padding: 35, 
    alignItems: "center",
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: hp('3.5%'),
    textAlign: "center",
    fontSize:wp('6%'),
    fontWeight: "bold",
    color:'#fff'
  }
});

export default PopupModal;