import React from 'react';
import { Modal, Text, View, Image, Button, StyleSheet } from 'react-native';

const PlaceDetail = (props) => {
    let modalContent;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.image}/>
                <Text style={styles.text}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal visible={props.selectedPlace !== null} animationType='slide'
                onRequestClose={props.onModalClose}
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title={'Close'} onPress={props.onModalClose}/>
                    <Button title={'Delete'} color={'red'} onPress={props.onItemDeleted}/>
                </View>
            </View>
        </Modal>
    );
}

export default PlaceDetail;

const styles = StyleSheet.create({
    modalContainer: {
        margin: 40,

    },
    image: {
        width: '100%',
        height: 300
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 26
    }

})