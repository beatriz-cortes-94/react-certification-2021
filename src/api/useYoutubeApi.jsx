import { useState } from 'react';
import { useAppContext } from '../context/ContextProvider';
// import data from '../mock/youtube-videos-mock.json';

const useYoutubeApi = () => {
  const { query, updateResults } = useAppContext();
  const KEY = process.env.REACT_APP_API_KEY;
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&key=${KEY}`
    )
      .then((res) => res.json())
      .then((results) => {
        updateResults(results);
        setLoading(false);
        setError('');
      }, [])
      .catch((e) => {
        setError(`API error: ${e}`);
        console.error(error);
      });
    // updateResults(data);
    // setLoading(false);
    // setError('');
  };

  return {
    error,
    loading,
    fetchData,
  };
};

export default useYoutubeApi;
