import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const ListInput = (props) => {
       
    return(
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={(info)=> (
                <ListItem 
                    placeName={info.item.value}
                    onItemPress={() => props.onItemDeleted(info.item.key)}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    },
});

export default ListInput;