import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function principal({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
        <StatusBar hidden={false}> </StatusBar> 
        <View style = {{flex:1}}>
          <LinearGradient
            colors={[ "#FF6347", "#E32636","#FF007F","#C71585", "#8B008B"]}
            style = {styles.container}>
            <View style = {styles.containerDois}>
              <TouchableOpacity style = {[styles.containerIcons, styles.margin]}>
                <Icon style={styles.iconUm} name='question-circle-o'></Icon>
              </TouchableOpacity>
              <TouchableOpacity style = {[styles.containerIcons, styles.margin]}></TouchableOpacity>
            </View>
            <TouchableOpacity style = {[styles.containerIcons, styles.marginTop]}></TouchableOpacity>
            <Text style= {[styles.text, styles.marginTop, styles.textSize ]}>
              Enter the code sent to your number ending in 8691 or use your Backup Codes.
            </Text>
            <Text style= {[styles.text, styles.marginTop]}>
              It many take few moments to receive SMS.
            </Text>
            <TextInput
               style={[styles.input, styles.marginTop]}
               placeholder='Enter Two-Factor code'
               placeholderTextColor={'#C0C0C0'}/>
            <Text style = {[styles.text, styles.textPosition]}>What is it ?</Text>
            <TouchableOpacity
              style={[styles.btnUm, styles.marginTop]}
              onPress = { () =>
               navigation.navigate('facebook')} >
              <Text>
                Login with Instagram
              </Text>
            </TouchableOpacity>
            <Text style = {[styles.text, styles.marginTop]}>Back to Login</Text>
            <View style = {[styles.btnAlternativo]}>
              <Text style = {[styles.text]}>or</Text>
            </View>
            <TouchableOpacity
              style={[styles.btnDois, styles.marginTop]}
              onPress = { () =>
               navigation.navigate('telaLogin')}>
              <Text style = {[styles.text]}>Repost without login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </SafeAreaView>
    );
}
  const styles = StyleSheet.create({
    container:{
     flex: 1,
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'flex-start',
    },

    containerDois:{
     width: '100%',
     height: 50,
     flexDirection: 'row',
     justifyContent: 'flex-end',
    },

    containerIcons:{
     width: 50,
     height: 50,
     backgroundColor: '#ffffff',
    },
    iconUm:{
      position: 'absolute',
      width: 50,
      height: 50,
    },

    input:{
     width: "85%",
     height: 60,
     borderColor: "#C0C0C0",
     borderWidth: 1,
     borderRadius: 10,
     fontSize: 20,
    },

    btnUm:{
     width: "85%",
     height: 45,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
     borderColor: "#A9A9A9",
     borderWidth: 1,
    },

    btnDois:{
      width: "85%",
      height: 45,
      backgroundColor: "#7F2750",
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: "#C71585",
      borderWidth: 1,
     },

    btnAlternativo:{
       width: 35,
       height: 35,
       backgroundColor: '#7F2750',
       borderRadius:50,
       alignItems: 'center',
       justifyContent: 'center',
       borderColor: "#C71585",
       borderWidth: 1,
       marginTop: 15,
     },
     
    text: {
     fontSize: 14,
     color: '#fff',
    },

    margin: {
     marginRight: 25,
    },

    marginTop:{
      marginTop: 12,
    },

    textSize:{
      width: '80%',
      textAlign: 'center',
    },

    textPosition:{
      marginLeft: '65%',
    }
  });