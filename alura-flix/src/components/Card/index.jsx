import React from "react";
import styles from "./Card.module.css";
import Image from "../Image";
import { useFavoritosContext } from "../../context/favorites";
import { useModalContext } from "../../context/modal";


function Card({ id, title, category, image, video, description, favorite, backgroundColor }) {
  const colorCard = {
    '--border-color': backgroundColor,
  };

  const { favorito, agregarFavorito } = useFavoritosContext();
  const { openModal } = useModalContext();
  const isFavorito = favorito.some(fav => fav.id === id);
 

  const handleClick = () => {
    agregarFavorito({ id, title, category, image, video, description, favorite });
  };

  const handleEditModal = () => {
    openModal({ id, title, category, image, video, description, favorite });
  };

  const handleDeleteModal = () => {
    openModal({ id, title});
  };


  return (
      <div className={`card ${styles.card}`} style={colorCard}>
        <Image id={id} title={title} src={image} />
        <div className={`card-body ${styles.cardBody}`}>
          {isFavorito ? (
            <i className="bi bi-heart-fill" onClick={handleClick}></i>
          ) : (
            <i className="bi bi-heart" onClick={handleClick}></i>
          )}
          <div>
            <i className="bi bi-pencil-fill" onClick={handleEditModal}></i>
            <i className="bi bi-trash-fill" onClick={handleDeleteModal}></i>
          </div>
        </div>
      </div>
  );
}

export default Card;



