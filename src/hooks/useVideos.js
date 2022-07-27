import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (defaultTerm) => {

    const response = await youtube.get('/search', {
      params: {
        q: defaultTerm
      }
    });

    setVideos(response.data.items);
  }

  return [videos, search];
}

export default useVideos;