
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';


import PlaceInput from './src/components/PlaceInput/PlaceInput';
import ListInput from './src/components/ListInput/ListInput';

export default class App extends Component {

  state = {
    places: []
  }

  addPlaceHandler = (placeName) => {
    this.setState(prevState => {
        return {
            places: prevState.places.concat({
              key: Math.random(),
              value: placeName
            })
        };
    });
  };

  placeDeletedHandler = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput 
          onPress={this.addPlaceHandler} 
        />
        <ListInput places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
