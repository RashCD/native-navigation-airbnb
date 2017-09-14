import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import Navigator, { SharedElementGroup, SharedElement } from 'native-navigation';
import Screen from '../components/Screen';
import { SCREENONE, SCREENTWO } from '../routes';

const imageDog = require('../assets/flip.jpg')

export default class ScreenTest extends Component {
  constructor() {
      super()
  }
    
  render() {
    const { id } = this.props;

    return (
      <View>
        <SharedElement
            type="poster"
            typeId={id}
        >
            <Image style={{width:400,height:300}} source={{ uri: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg' }} />
            {/* <Text> Doggo {id} </Text> */}
        </SharedElement>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
