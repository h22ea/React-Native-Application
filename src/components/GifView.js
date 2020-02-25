import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const GifView = (props) => {
    console.log('inside Gif View', props.gifs[0]);
    return(
        <View>
            <Text>Gifff</Text>
            {/* <Image style={styles.gif} source={{uri:  }}></Image> */}
        </View>
    );
}

const styles = StyleSheet.create({});

export default GifView;