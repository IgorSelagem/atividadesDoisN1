import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

function facebook({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
        <StatusBar hidden = {false} translucent={true} backgroundColor={'transparent'}/>
        <View style = {[styles.container]}>
          <View style = {[styles.containerUm]}></View>
          <View style = {[styles.containerDois]}>
           <View style = {[styles.localNome]}>
             <Text style = {[styles.nomeUser]}>Your Name</Text>
           </View>
           <View style = {[styles.boxIcons]}>
             <View style = {[styles.icons]}></View>
             <View style = {[styles.icons]}></View>
           </View>
           <View style = {[styles.infosUser]}>
             <Text style = {[styles.marginLeft]}>Your basic info 1</Text>
             <Text style = {[styles.marginLeft, styles.marginTop]}>Your basic info 2</Text>
           </View>
           <View style = {[styles.moreInfos]}>
             <Text style = {[ styles.footerInfos]}>ABOUT</Text>
             <Text style = {[ styles.footerInfos]}>PHOTOS</Text>
             <Text style = {[ styles.footerInfos]}>FRIENDS</Text>
           </View>
          </View>
          <View style = {styles.containerTres}></View>
        </View>
      </SafeAreaView>
    );
};


  const styles = StyleSheet.create ({
    container: {
     flex: 1,
    },
    containerUm:{
      flex: 1.8,
      backgroundColor: '#C8CCDF',
    },
    containerDois:{
      flex:3.2,
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    containerTres:{
      width: '25.5%',
      height: 160,
      backgroundColor: '#D1D4E7',
      position: 'absolute',
      marginTop: 180,
      marginLeft: '30%',
      borderColor: '#fff',
      borderWidth: 3,
    },
    localNome:{
     flex: 4,
     width: '90%',
     borderBottomColor: 'black',
     borderBottomWidth: 1,
     justifyContent: 'flex-end',
     alignItems: 'center',
    },
    boxIcons:{
     flex: 1.5,
     width: '100%',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-around',
    },
    infosUser:{
     flex: 1.7,
     borderTopColor: 'black',
     width: '90%',
     borderTopWidth: 1,
     justifyContent: 'center',
    },
    moreInfos:{
     flex: 1,
     width: '100%',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-around',
     backgroundColor: '#000000',
    },

    icons:{
      width: 50,
      height: 50,
      backgroundColor: '#000000',
    },

    nomeUser: {
     color: '#000',
     fontSize: 33,
     marginBottom: 20,
    },

    footerInfos: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#bfc4dc',
    },

    marginLeft:{
     marginLeft: 40,
     fontSize: 16,
    },
    marginTop: {
     marginTop: 10,
    },

 });

export default facebook;