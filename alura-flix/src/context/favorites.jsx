import React, { createContext, useState, useContext } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

export function FavoritoProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  function agregarFavorito(nuevoFavorito) {
    const favoritoRepetido = favorito.some((item) => item.id === nuevoFavorito.id);

    let nuevaLista = [...favorito];

    if (!favoritoRepetido) {
      nuevaLista.push(nuevoFavorito);
      setFavorito(nuevaLista);
    } else {
      nuevaLista = favorito.filter((item) => item.id !== nuevoFavorito.id);
      setFavorito(nuevaLista);
    }
  }

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito, agregarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritosContext() {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error("useFavoritosContext must be used within a FavoritoProvider");
  }
  return context; 
}



