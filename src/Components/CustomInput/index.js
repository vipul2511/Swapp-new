import React,{useState} from 'react';
import {View, Text, Image,Platform, StatusBar, TextInput,StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomIinput=({header,value,onchange})=>{
  const [focus,setfoucs] = useState(false);
  const [inputval, setInputval] = useState('');
  const updatefocus = () => {
    setfoucs(false)
    setfoucs(!focus)
  }
  React.useEffect(() => {
    // console.log(focus)
  },[focus]);
  const InputValueHandler = e => {
    setInputval(e);
  };
    return(
       <View>
          <View style={{marginTop: hp('4%')}}>
            <Text style={[focus ? styles.activeheadertext : styles.disableheadertext]}>{header}</Text>
          </View>
          <TextInput
        value={inputval}
        onChangeText={e => InputValueHandler(e)}
        placeholder="Input empty"
        style={[
          focus ? styles.activeheader : styles.disableheader,
          {
            // color: '#5E6272',
            marginTop: hp('1.5%'),
            height: Platform.OS === 'ios' ? hp('5%') : hp('5%'),
          },
        ]}
        // style={[focus ? styles.activeheader : styles.disableheader]}

        placeholderTextColor="#5E6272"
        onFocus={updatefocus}
        onBlur={updatefocus}
      />
          <View
            style={{marginTop:hp('1.5%')},[focus ?   styles.activeborder:styles.disableborder ]}
          />
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
fontSize:16
},
activeheadertext:{
  fontSize:wp('3.5%'),
  color:'white',
},
disableheadertext:{
  fontSize:wp('3.5%'),
  color: '#5E6272'
},
disableheader:{
  color: '#5E6272',
  fontSize:16
}
});
export default  CustomIinput