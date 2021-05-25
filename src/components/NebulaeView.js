import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import astronaut from '../../assets/astronaut.png';

const NebulaeView = (props) => {
    return(
        <View>
            <Text>
                The Nebulae View
                <img src={astronaut} alt="astronaut"/>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default NebulaeView;
