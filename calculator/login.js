import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
      <View style={styles.wrapper}>
        <Image 
          style={styles.bgImage}
          source={{uri:'https://images.pexels.com/photos/1624504/pexels-photo-1624504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} 
        ></Image>
        <View style={styles.container}>
          <View style={styles.inputWrap}>
            <Text style={styles.introText}>Username</Text>
            <TextInput style={styles.inputDefault}></TextInput>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.introText}>Password</Text>
            <TextInput style={styles.inputDefault}></TextInput>
          </View>
          
          <TouchableOpacity >
             <Text style={styles.defaultButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1
  },
  container: {
    paddingLeft:20,
    paddingRight:20,
    paddingTop:20,
    paddingBottom:20,
    width:'100%',
    height:'100%',
    flex:1,
    // alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,1)',
    position:'relative',
    zIndex:1
  },
  bgImage: {
    position:"absolute",
    zIndex:0,
    height:'100%',
    width:'100%',
    top:0,
    left:0
  },
  introText: {
    fontSize:20,
    fontWeight:'100',
    color: '#aaa'
  },
  inputWrap:{
    backgroundColor:'#222',
    shadowColor:'#333',
    paddingLeft:20,
    paddingRight:30,
    paddingTop:10,
    paddingBottom:10,
    marginBottom:20,
    borderRadius:10,
    width:'100%'
  },
  inputDefault: {
    height:40,
    borderBottomColor: '#333',
    width:'100%'
  },
  defaultButton: {
    display:'flex',
    backgroundColor:'#3f51b5',
    color:'white',
    borderRadius:5,
    height: 50,
    lineHeight:50,
    width:'100%',
    fontSize:20,
    textAlign:'center',
    textTransform:'uppercase'
  }
});
