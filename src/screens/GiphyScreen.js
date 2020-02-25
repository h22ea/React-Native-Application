import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import giphy from '../api/giphy';
import GifView from '../components/GifView';
import { FlatList } from 'react-native-gesture-handler';

const GiphyScreen = () => {
  const [images, setImages] = useState([]);

  const searchForGifs= async () => {
    const response = await giphy.get('/trending', {
      params: {
        api_key: 'Y8N2iAFFHHkUmEQvsnutVF3t1vSEll2Q',
        limit: 1,
        rating: 'G'
      }
    });
    // console.log('bubulina', response.data.data[0].images.downsized_large.url);
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