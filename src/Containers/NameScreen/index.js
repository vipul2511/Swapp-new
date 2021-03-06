import React, { useState } from 'react';
import {View, Text, Image, StatusBar, TextInput,TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomInput from '../../Components/CustomInput'
import TransparentButton from '../../Components/TransparentButton';
// import {ArrowLeft} from '../../Assets/Images/ArrowLeft.svg';
import PopupModal from '../../Components/PopupModal';


const NameScreen = ({navigation}) => {
  const [showModal,setShowModal]=useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#181A20'}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <TouchableOpacity style={{marginTop: hp('7%'), marginLeft: wp('10%')}} onPress={() => navigation.goBack()}>
        <Image source={require('../../Assets/Images/ArrowLeft.png')} />
       
        {/* <ArrowLeft  height={15} width={15} /> */}
      </TouchableOpacity>

      <View style={{marginHorizontal: wp('8%')}}>
        <View
          style={{
            marginTop: hp('5%'),
          }}>
          <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
            Add your full name
          </Text>
        </View>
        <View style={{marginVertical: hp('2%')}}>
          <Text style={{color: '#5E6272', letterSpacing: 0.4}}>
            Enter your full name
          </Text>
        </View>
<CustomInput header={'FIRST NAME'}/>
<CustomInput header={'LAST NAME'}/>
<View style={{marginTop:wp('10%')}}>
<TransparentButton title="Next" onPress={()=>{setShowModal(true)}} style={{width:wp('85%'),height:hp('7.3%'),backgroundColor:'#246BFD',borderColor: null}} textStyle={{fontWeight:'bold'}}/>
    </View>       
      </View>
       {showModal==true&&<PopupModal visible={true}  />}
    </View>
  );
};

export default NameScreen;
