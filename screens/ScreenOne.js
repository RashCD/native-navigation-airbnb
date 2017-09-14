import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ListView,
  Image,
} from 'react-native';
import Navigator, { SharedElementGroup, SharedElement } from 'native-navigation';
import Screen from '../components/Screen';
import { SCREENONE, SCREENTWO } from '../routes';
// import ImageRow from '../components/ImageRow';

const imageDog = require('../assets/flip.jpg')

const dataLists = [1, 2, 3, 4, 5, 6];

const onPress = id => () => {
  Navigator.push(SCREENTWO, { id }, {
    transitionGroup: id,
  });
  console.log('row id is ' + id);
}

export default class ScreenOne extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(dataLists),
    };
  }

  renderRow(rowID) {
    return(
      <SharedElementGroup id={rowID} style={{ borderColor: 'black', borderWidth: 1}}>
        <TouchableOpacity 
            style={{ flex: 1 }}
            onPress={onPress(rowID)}
        >
          <SharedElement
            type="poster"
            typeId={rowID}
          >
            <Image source={{ uri: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg' }} 
                        style={{ height: 200, width: 200 }} />
          </SharedElement>

          <Text> Doggo {rowID} </Text>

        </TouchableOpacity>
    </SharedElementGroup>
    )

  }

  render() {
    return (
      <Screen>
        <ListView
            style={{ flex: 1 }}
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionID, rowID) => this.renderRow(rowID)}
        />
      </Screen>
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
