import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';


class PlaceInput extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        placeName: ''
    }

    placeNameChangeHandler = (val) => {
        this.setState({
          placeName: val,
        });
      }
    
    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPress(this.state.placeName);
    }

    render() {
        return(
            <View style={styles.inputContainer}>
                    <TextInput value={this.state.placeName} 
                                onChangeText={this.placeNameChangeHandler}
                                placeholder='An awesome place'  
                                style={styles.placeInput}
                    />

                    <Button title='Add' 
                            style={styles.placeButton}  
                            onPress={this.placeSubmitHandler} />
            </View>
        )
    };

};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },  
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    },
});

export default PlaceInput;