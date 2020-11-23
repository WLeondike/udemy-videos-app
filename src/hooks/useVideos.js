import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const KEY = 'AIzaSyBlIHwXAreyf82lv9sjkCkoyjcdv8mElbE';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
      },
    });

    setVideos(res.data.items);
  };

  return [videos, search];
};

export default useVideos;
