import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const NebulaeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to the Void!</Text>  
      <Text style={styles.text}>There's nothing here.</Text>  
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

export default NebulaeScreen;
