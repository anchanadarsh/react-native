import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

export default function App() {

  //logic for numeric keypad buttons
  let num = [['1','2','3'],['4','5','6'],['7','8','9'],['.','0','=']];
  let rows = [];

  for(var i=0; i<4 ; i++){
    let cols = [];
    for(var j=0;j<3;j++){
      cols.push(
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonsText}>{num[i][j]}</Text>
        </TouchableOpacity>
      )
    }
    rows.push(
      <View style={[styles.keyPadRow]}>
        {cols}
      </View>
    )
  }

  //logic for operator keypad buttons
  let operators = ['Del','/','x','-','+'];
  let operatorRow = [];
  for(var i=0; i<5 ; i++){
    operatorRow.push(
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonsText}>{operators[i]}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={[styles.operationArea,styles.pad15]}>
        <Text style={styles.operationAreaText}>22*10</Text>
      </View>
      <View style={[styles.resultArea,styles.pad15]}>
        <Text style={styles.resultAreaText}>220</Text>
      </View>
      <View style={styles.keypadArea}>
        <View style={[styles.keypadNumericArea]}>
          {rows}
        </View>
        <View style={[styles.keypadOperationArea]}>
            {operatorRow}
        </View>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  operationArea:{
    flex:25,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  operationAreaText:{
    fontSize:50,
    fontWeight:'400'
  },
  resultArea:{
    flex:15,
    backgroundColor:'#e1f5fe',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  resultAreaText:{
    fontSize:36,
    fontWeight:'300'
  },
  pad15:{
    padding:15
  },
  keypadArea:{
    flex:60,
    backgroundColor:'#0277bd',
    flexDirection:'row'
  },
  keypadNumericArea:{
    flex:75,
    backgroundColor:'#01579b'
  },
  keypadOperationArea:{
    flex:25
  },
  keyPadRow:{
    flex:1,
    flexDirection:'row'
  },
  buttons:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonsText:{
    color:'white',
    fontSize:28,
  }
  
});
