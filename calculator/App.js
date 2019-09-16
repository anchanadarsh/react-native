import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      calcText: '',
      result: ''
    }
  }

  calculatedText() {
    //converting current text to array
    let lastInputCharacterArray = this.state.calcText.split('');
    //getting last character from the array
    let lastInputCharacter = lastInputCharacterArray[lastInputCharacterArray.length - 1];
    if (lastInputCharacter == '+' || lastInputCharacter == '-' || lastInputCharacter == '*' || lastInputCharacter == '/') {
      return
    } else {
      this.setState({
        result: eval(this.state.calcText)
      })
    }
  }

  operate(operation) {
    switch (operation) {
      case 'Del':
        const text = this.state.calcText.split('')
        text.pop()
        this.setState({
          calcText: text.join('')
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
        //converting current text to array
        let lastInputCharacterArray = this.state.calcText.split('');
        //getting last character from the array
        let lastInputCharacter = lastInputCharacterArray[lastInputCharacterArray.length - 1];
        //if current text is blank or last character is decimal point then dont perform anything
        //else if last character is any of operator then replace last character with pressed operator
        //else add the operator at end
        if (this.state.calcText == '' || lastInputCharacter == '.') {
          return
        } else if (lastInputCharacter == '+' || lastInputCharacter == '-' || lastInputCharacter == '*' || lastInputCharacter == '/') {
          const text1 = this.state.calcText.split('')
          text1.pop()
          text1.push(operation)
          this.setState({
            calcText: text1.join('')
          })
        } else {
          this.setState({
            calcText: this.state.calcText + operation
          })
        }
    }
  }

  numberPress(text) {

    //converting current text to array
    let lastInputCharacterArray = this.state.calcText.split('');
    //getting last character from the array
    let lastInputCharacter = lastInputCharacterArray[lastInputCharacterArray.length - 1];

    //when user presses '=' button do the operation calculate the expression
    //if user enter '.' check last character if last character is '.' then do nothing else concate
    //else concate and evaluate the expression 
    if (text == '=') {
      return this.calculatedText();
    } else if (text == '.'){
      if(lastInputCharacter != '.'){
        this.setState({
          calcText: this.state.calcText + text
        })
      }
    } else {
      this.setState({
        calcText: this.state.calcText + text
      })
      setTimeout(() => {
        this.setState({
          result: eval(this.state.calcText)
        })
      },100)
    }
  }

  render() {
    //logic for numeric keypad buttons
    let num = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    let rows = [];

    for (let i = 0; i < 4; i++) {
      let cols = [];
      for (let j = 0; j < 3; j++) {
        cols.push(
          <TouchableOpacity style={styles.buttons} onPress={() => this.numberPress(num[i][j])}>
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
    let operators = ['Del', '/', '*', '-', '+'];
    let operatorRow = [];
    for (let i = 0; i < 5; i++) {
      operatorRow.push(
        <TouchableOpacity style={styles.buttons} onPress={() => this.operate(operators[i])}>
          <Text style={styles.buttonsText}>{operators[i]}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View style={[styles.operationArea, styles.pad15]}>
          <Text style={styles.operationAreaText}>{this.state.calcText}</Text>
        </View>
        <View style={[styles.resultArea, styles.pad15]}>
          <Text style={styles.resultAreaText}>{this.state.result}</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  operationArea: {
    flex: 25,
    backgroundColor: '#161616',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  operationAreaText: {
    fontSize: 50,
    fontWeight: '400',
    color: '#cfcfcf'
  },
  resultArea: {
    flex: 15,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  resultAreaText: {
    fontSize: 36,
    fontWeight: '300',
    color: '#fff'
  },
  pad15: {
    padding: 15
  },
  keypadArea: {
    flex: 60,
    backgroundColor: '#0277bd',
    flexDirection: 'row'
  },
  keypadNumericArea: {
    flex: 75,
    backgroundColor: '#01579b'
  },
  keypadOperationArea: {
    flex: 25
  },
  keyPadRow: {
    flex: 1,
    flexDirection: 'row'
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonsText: {
    color: 'white',
    fontSize: 28,
  }

});
