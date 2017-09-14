import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Navigator, { SharedElementGroup, SharedElement } from 'native-navigation';

import LoremImage from './LoremImage';

export default class ImageRow extends Component {
  render() {
    const {
      id,
    } = this.props;
    console.log('id is ' + id);

    return (
      
        <SharedElement
            type="lorem-image"
            typeId={id}
        >
            <Image
                style={{ flex: 1 }}
                source={{ uri: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg' }}
            />
        </SharedElement>

    );
  }
}
