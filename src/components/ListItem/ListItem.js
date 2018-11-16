import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPress}>
        <View style={Styles.listItem}>
            <Image source={props.placeImage} style={Styles.placeImage} resizeMode='cover'/>
            <Text>
                {props.placeName}
            </Text>
        </View>
    </TouchableOpacity>
);

const Styles = StyleSheet.create({
    listItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#eee'
    },
    placeImage: {
        width: 30,
        height: 30,
        marginRight: 5
    }
})

export default ListItem;
