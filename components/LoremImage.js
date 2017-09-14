import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SharedElement,
  Image,
} from 'react-native';


export default class LoremImage extends Component {
  render() {
    const {
      id,
      onPress,
    } = this.props;

    return (
        <SharedElement
            type="lorem-image"
            typeId={id}
            style={{ width: 100, height: 100 }}
        >
            <Image
                style={{ flex: 1 }}
                source={{ uri: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg' }}
            />
        </SharedElement>
    );
  }
}
