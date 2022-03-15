import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, Touchable} from 'react-native';
export default function telaLogin({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
        <StatusBar backgroudColor='#3B5998' hidden={false} ></StatusBar> 
        <View style = {[styles.container]}>
          <Text style = {[styles.facebook]} >facebook</Text>
          <TextInput
            style={[styles.input]}
            placeholder ='Email ou telefone'
            clearButtonMode='always'>
          </TextInput>
          <TextInput
            style={[styles.input]}
            placeholder='Senha'
            clearButtonMode='always'>             
          </TextInput>
          <TouchableOpacity
            style={[styles.btn]}
            onPress = { () => navigation.navigate('facebook')}>
            <Text style={[styles.textBtn]}>
              Log in
            </Text>
            </TouchableOpacity>
            <Text style={[styles.footerText]}>
              sign up for facebook
            </Text>
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
     backgroundColor: '#3B5998',
    },

    input:{
     width: '80%',
     height: 50,
     backgroundColor: '#FFFFFF',
     color: '#000000',
     marginBottom: '5%',
     borderRadius: 10,
     fontSize: 16,
    },

    facebook: {
     fontSize: 46,
     color: '#FFFFFF',
     fontWeight: 'bold',
     marginBottom: 30,
     marginTop: 170,
    },

    btn: {
      width: '80%',
      height: 50,
      backgroundColor: '#2F477A',
      borderColor: "#3B5998",
      marginTop: '1.5%',
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
    },

    textBtn: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },

    footerText: {
      fontSize: 14,
      color: '#DCDCDC',
      marginTop: 200,
    }

  });