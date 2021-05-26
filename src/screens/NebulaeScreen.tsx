import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, SafeAreaView, Animated, Easing } from 'react-native';

const NebulaeScreen = ({navigation}) => {
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to the Void!</Text>  
      <Text style={styles.text}>There's nothing here.</Text>
      <Animated.Image
        style={{height: 300, width: 300, transform: [{rotate: spin}]}}
        source={{uri: 'http://www.pngmart.com/files/5/Astronaut-Transparent-Background.png'}}
      />
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

export default NebulaeScreen;
