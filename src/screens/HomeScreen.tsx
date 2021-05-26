import React from 'react';
import { Text, StyleSheet, Button, SafeAreaView } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>A thousand greetings, React Native!</Text>  
      <Button
        onPress={()=>{navigation.navigate('Giphy')}}
        title="Click here for kewl GIFs">
      </Button>
      <Button
        onPress={()=>{navigation.navigate('Nebulae')}}
        title="Click to entert the void.">
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 30
  }
});

export default HomeScreen;
