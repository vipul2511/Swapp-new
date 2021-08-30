import React,{useState} from 'react';
import {View, Text, Image,Platform, StatusBar,TouchableOpacity, TextInput,StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomIinput=({header,eye,eyeStyle,value,onchange,securetext,style,noBorder,warning})=>{
  const [focus,setfoucs] = useState(false);
  const [isshow,setIsShow] =useState(securetext);
  const updatefocus = () => {
    setfoucs(!focus)
  }
  React.useEffect(() => {
    // console.log(focus)
  },[focus]);
    function setFocus(text){
      if(!focus && text){
        return -15;
      }
     if(!focus) return 10;
     else return 0;
    }
    return(
       <View>
          <View style={{marginTop: hp('3%')}}>
            <Text style={[focus ? styles.activeheadertext : styles.disableheadertext,{top:setFocus(value)}]}>{header}</Text>
          </View>
          <>
          {eye?<TouchableOpacity
            onPress={() => {
              setIsShow(!isshow);
            }}
            style={[eyeStyle,{top:focus?hp('8%'):hp('5%')}]}>
            <Image
              source={isshow?require('../../Assets/Images/Hide.png'):require('../../Assets/Images/Show.png')}
              style={{resizeMode: 'contain', height: '100%', width: '100%'}}
            />
          </TouchableOpacity>:null}
          <TextInput
        value={value}
        onChangeText={onchange}
        // placeholder="Input empty"
        secureTextEntry={isshow}
        style={[
          focus ? styles.activeheader : styles.disableheader,
          {
            // color: '#5E6272',
            height: Platform.OS === 'ios' ? hp('6%') : hp('6%'),
          },
          style
        ]}

        placeholderTextColor="#5E6272"
        onFocus={updatefocus}
        onBlur={updatefocus}
        blurOnSubmit
      />
      </>
          {!noBorder?<View
            style={{marginTop:hp('1.5%')},[focus ?   styles.activeborder:styles.disableborder ]}
          />:
          !warning?<View style={focus?styles.Passfocusborder:warning?styles.Passactiveborder:styles.Passdisableborder} />:null
} 
        {warning?<View style={warning?styles.Passactiveborder:styles.Passdisableborder} />:null}
        </View> 
    )
}


const styles = StyleSheet.create({
  activeborder:{
    borderBottomColor: '#246BFD',
    shadowColor: '#246BFD',

    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 10,
    borderBottomWidth: 1.5,
  },

disableborder:{
  borderBottomColor: '#5E6272',

  
    borderBottomWidth: 1.5,
},
activeheader:{
color:'white',
fontSize:16,
fontFamily:'Inter-SemiBold'
},
activeheadertext:{
  fontSize:wp('3.3%'),
  color:'white',
  fontFamily:'Inter-Bold'
},
disableheadertext:{
  fontSize:wp('3.3%'),
  color: '#5E6272',
  fontFamily:'Inter-Bold',
  position: 'absolute',

   
},
disableheader:{
  color: '#5E6272',
  fontSize:16
},

Passactiveborder: {
  borderBottomColor: '#FF0B80',
  shadowColor: '#FF0B80',

  shadowOpacity: 0.5,
  shadowRadius: 2,
  shadowOffset: {
    height: 1,
    width: 1,
  },
  elevation: 10,
  borderBottomWidth: 1.5,
},
Passfocusborder:{
  borderBottomColor: '#246BFD',
  shadowColor: '#FF0B80',

  shadowOpacity: 0.5,
  shadowRadius: 2,
  shadowOffset: {
    height: 1,
    width: 1,
  },
  elevation: 10,
  borderBottomWidth: 1.5,
},
Passdisableborder: {
  borderBottomColor: '#5E6272',

  borderBottomWidth: 1.5,
},
});
export default  CustomIinput