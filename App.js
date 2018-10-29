
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';


import PlaceInput from './src/components/PlaceInput/PlaceInput';
import ListInput from './src/components/ListInput/ListInput';

export default class App extends Component {

  state = {
    places: []
  }

  addPlace = (place) => {
    this.setState(prevState => {
        return {
        places: prevState.places.concat(place)
        }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput 
          placeName={this.state.placeName}
          onChange={this.placeNameChangeHandler}
          onPress={this.addPlace}
        />
        <ListInput places={this.state.places}/>
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
