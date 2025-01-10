import styles from "./DeleteForm.module.css";
import { VideoContext } from "../../context/videos";
import { FavoritosContext } from "../../context/favorites";
import { useContext } from "react";
import { deleteVideo } from '../../api';
import { useModalContext } from "../../context/modal";


const DeleteForm = ({ modalContent }) => {

    const { setVideos } = useContext(VideoContext);
    const { setFavorito } = useContext(FavoritosContext); 
    const { closeModal } = useModalContext();

    const handleDeleteVideo = async (e) => {
        e.preventDefault();
        
        try {
          
            const deletedData = await deleteVideo(modalContent.id);


            console.log(deletedData);
            // Actualizar el estado de los videos generales
            setVideos((prevVideos) =>
                prevVideos.filter((vid) => vid.id !== deletedData.id)
            );
            
            // Actualizar también el estado de los videos favoritos si es necesario
            setFavorito((prevFavoritos) =>
                prevFavoritos.filter((fav) => fav.id !== deletedData.id)
            );
              
            closeModal();
        } catch (error) {
            console.error('Error updating video:', error);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleDeleteVideo}>
            <p className={styles.deleteMessage}>¿Seguro que quieres eliminar el video <span>{modalContent.title}</span></p>

            <div className={styles.buttons}>
                <button className="btn btn-primary" onClick={closeModal}>Cancelar</button>
                <button className="btn btn-danger" type="submit">Eliminar</button>
            </div>
        </form>
    );
};

export default DeleteForm;