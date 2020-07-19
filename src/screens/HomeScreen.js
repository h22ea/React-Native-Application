import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>A thousand greetings, React Native!</Text>  
      <Button
        onPress={()=>{navigation.navigate('Giphy')}}
        title="Click here for kewl GIFs">
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 30
  }
});

export default HomeScreen;