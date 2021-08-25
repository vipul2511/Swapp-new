import React,{useEffect} from 'react';
import {View,Text,Image,StatusBar} from 'react-native';
import styles from './Styles';
const SplashScreen=({navigation})=>{
  useEffect(
    () => {
      let timer1 = setTimeout(() => navigation.navigate('OnBoarding'), 2000);

      return () => {
        clearTimeout(timer1);
      };
    },

    []
  );
 return(
     <View style={styles.Container} >
          <StatusBar backgroundColor="#2C303A" barStyle="light-content" />
         <View style={styles.image}>
       <Image source={require('../../Assets/Images/logo-2.png')} style={styles.logo} />
       </View>
     </View>
 )
}
export default SplashScreen;