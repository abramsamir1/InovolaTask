import React, { Component } from 'react';
import {  Text, StyleSheet, Dimensions} from 'react-native';
import {  Footer, FooterTab, Button } from 'native-base';
import { theme, texts } from '../constants';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


 class CustomFooter extends Component {
  render () {  
  return (
 
          <Button
            full
            style={styles.btnStyle}

          >
            <Text style={styles.btnText}>{texts.texts.btnText}</Text>

          </Button>
        
      );
  }
}

const styles = StyleSheet.create({
    btnStyle: {
  
      backgroundColor: theme.colors.secondary,
      height: windowHeight * 0.075
  
  
    },
    btnText: {
      color: theme.colors.white,
      fontSize: theme.sizes.header,
      fontWeight: 'bold'
    }
  
  })
  
  export default CustomFooter;