import { useState } from 'react';
import { useAppContext } from '../context/ContextProvider';

const useYoutubeApi = () => {
  const { query } = useAppContext();
  const KEY = process.env.REACT_APP_API_KEY;
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&key=${KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setResults(result);
        setLoading(false);
        setError('');
      }, [])
      .catch((e) => {
        setError(`API error: ${e}`);
        console.error(error);
      });
  };

  return {
    error,
    loading,
    results,
    fetchData,
  };
};

export default useYoutubeApi;
