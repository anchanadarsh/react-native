import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.introText}>Username</Text>
      <TextInput style={styles.inputDefault}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:50,
    paddingRight:50,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  introText: {
    fontSize:20,
    fontWeight:'bold',
    color: '#00e676',
  },
  inputDefault: {
    height:50,
    borderBottomColor: '#333',
    width:'100%',
    borderColor:'white',
    borderBottomWidth:2
  }
});
