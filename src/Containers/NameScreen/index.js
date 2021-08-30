import React, { useState } from 'react';
import {View, Text, Image, StatusBar,SafeAreaView, TextInput,TouchableOpacity, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomInput from '../../Components/CustomInput'
import TransparentButton from '../../Components/TransparentButton';
// import {ArrowLeft} from '../../Assets/Images/ArrowLeft.svg';
import PopupModal from '../../Components/PopupModal';
import Button from '../../Components/CreatingAccount/Button';
import BackArrow from '../../Components/CreatingAccount/BackArrow';


const NameScreen = ({navigation}) => {
  const [showModal,setShowModal]=useState(false);
  const [firstName,setFirstName]=useState('');
  const [secondName,setSecondName]=useState('');
  const InputValueHandler = e => {
    setFirstName(e);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#181A20'}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={{marginTop:hp('4%')}}>
        <BackArrow />
        </View>
       <ScrollView>
      <View style={{marginHorizontal: wp('5%')}}>
        <View
          style={{
            marginTop: hp('2%'),
          }}>
          <Text style={{color: 'white', fontSize: wp('7%'),fontFamily:'Poppins-SemiBold'}}>
            Add your full name
          </Text>
        </View>
        <View style={{marginVertical: hp('1%')}}>
          <Text style={{fontSize:wp('4%'),color: '#5E6272',fontFamily:'Inter-Regular' ,letterSpacing: 0.4}}>
            Enter your full name
          </Text>
        </View>
<CustomInput onchange={InputValueHandler} value={firstName} header={'FIRST NAME'}/>
<CustomInput onchange={(text)=>{setSecondName(text)}} value={secondName} header={'LAST NAME'}/>
<View style={{marginTop:wp('10%')}}>
    </View>       
      </View>
      </ScrollView>
      <Button handleFunction={()=>navigation.navigate('AcceptTerm')} btnText={'Next'}/>
    </SafeAreaView>
  );
};

export default NameScreen;
