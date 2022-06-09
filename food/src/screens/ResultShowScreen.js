import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const resultApi = (id, onSuccess, onError) => 
  yelp
    .get(`/${id}`)
    .then(({ data }) => onSuccess(data))
    .catch(onError);

const ResultShowScreen = ({ route }) => {
  const resultId = route.params.id;

  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  console.log(result);

  useEffect(() => {
    resultApi(
      resultId,
      setResult,
      () => { setError('Something went wrong') },
    );
  }, []);

  if (!result) return null;

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultShowScreen;
