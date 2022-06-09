import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const searchApi = (term, onSuccess, onError) => 
  yelp
    .get(
      '/search', 
      { 
        params: { 
          term,
          limit: 50,
          location: 'paradiso'
        } 
      }
    )
    .then(({ data }) => onSuccess(data))
    .catch(onError);

const useResults = (defaultSearchTerm = 'kebab') => {
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (term) =>
    searchApi(
      term, 
      (data) => { 
        setError('');
        setResults(data.businesses);
      },
      () => { setError('Something went wrong') },
    );

  useEffect(() => {
    handleSearch(defaultSearchTerm);
  }, []);

  return [handleSearch, results, error];
}

export default useResults;
