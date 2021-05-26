import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import giphy from '../api/giphy';
import GifView from '../components/GifView';

const GIPHY_TOKEN = process.env.GIPHY_TOKEN;

const GiphyScreen = () => {
  const [images, setImages] = useState([]);

  const searchForGifs= async () => {
    const response = await giphy.get('/trending', {
      params: {
        api_key: GIPHY_TOKEN,
        limit: 1,
        rating: 'G'
      }
    });
    setImages(response.data.data);
  }

  return (
    <View>
      <Button title='see api request' onPress={searchForGifs}></Button>
      <GifView gifs={images}/>
    </View>
  );
}

const styles = StyleSheet.create({})

export default GiphyScreen;