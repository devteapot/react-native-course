import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [handleSearch, results, error] = useResults();

  const [costEffectieResults, bitPricierResults, bigSpenderResults] = results
    .reduce(
      (acc, curr) => [
        curr.price === '$' ? [...acc[0], curr] : acc[0],
        curr.price === '$$' ? [...acc[1], curr] : acc[1],
        curr.price === '$$$' ? [...acc[2], curr] : acc[2],
      ], 
      [[], [], []]
    );

  return (
    <View style={styles.background}>
      <SearchBar 
        searchTerm={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={() => handleSearch(searchTerm)}
      />
      {error !== '' && <Text>{error}</Text>}
      <ScrollView>
        <ResultsList 
          title='Cost Effective' 
          results={costEffectieResults}
        />
        <ResultsList 
          title='Bit pricier' 
          results={bitPricierResults}
        />
        <ResultsList 
          title='Big spender' 
          results={bigSpenderResults}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1
  },
});

export default SearchScreen;
