import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const GifView = (props: { gifs: any[]; }) => {
    console.log(props.gifs);
    let theChosenGif = `${props.gifs[0]}`
    return(
        <View>
            <Text>{theChosenGif}</Text>
            <Image style={styles.gif} source={{uri:  props.gifs[0]}}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    gif: {
        
    }
});

export default GifView;