
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';


import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import placeImage from './src/assets/Family.png';

export default class App extends Component {

  state = {
    places: [],
    selectedPlace: null
  }

  addPlaceHandler = (placeName) => {
    this.setState(prevState => {
        return {
            places: prevState.places.concat({
              key: Math.random(),
              name: placeName,
              image: {
                uri: "https://img1.10bestmedia.com/Images/Photos/352450/GettyImages-913753556_55_660x440.jpg"
              }
            })
        };
    });
  };

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find((place) => {
          return place.key === key
        })
      }
    })
   
  }
  placeDeletedHandler = () => {
    this.setState(prevState => {
          return {
            places: prevState.places.filter(place => {
              return place.key !== prevState.selectedPlace.key;
            }),
            selectedPlace: null
          }
        });
  }
  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} 
                     onItemDeleted={this.placeDeletedHandler} 
                     onModalClose={this.modalCloseHandler}
        />
        <PlaceInput 
          onPress={this.addPlaceHandler} 
        />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
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
