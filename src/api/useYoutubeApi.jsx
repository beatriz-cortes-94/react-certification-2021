import { useState } from 'react';

const useYoutubeApi = () => {
  const KEY = 'AIzaSyBu9PLyHpHNTJuESfCvKYqYf1eEgEaJ2EI';
  const [results, setResults] = useState(null);
  const fetchData = (query) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&key=${KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setResults(result);
      }, [])
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    results,
    fetchData,
  };
};

export default useYoutubeApi;
