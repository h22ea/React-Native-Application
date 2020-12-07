import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const GifView = (props) => {
    console.log(props.gifs);
    let fukU = `${props.gifs[0]}`
    return(
        <View>
            <Text>{fukU}</Text>
            <Image style={styles.gif} source={{uri:  props.gifs[0]}}></Image>
        </View>
    );
}

const styles = StyleSheet.create({});

export default GifView;