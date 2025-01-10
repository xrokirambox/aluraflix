import React, { createContext, useState, useEffect } from 'react';
import { useFavoritosContext } from './favorites';
import { fetchVideos } from '../api';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]); 
  const { setFavorito } = useFavoritosContext();

  useEffect(() => {
    const loadVideos = async () => {
      const data = await fetchVideos();
      setVideos(data);

      // favoritos iniciales
      const favoritosIniciales = data.filter(video => video.favorite);
      setFavorito(favoritosIniciales);
    };
 
    loadVideos();
  }, [setFavorito]);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

