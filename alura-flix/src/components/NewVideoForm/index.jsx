import styles from "./NewVideoForm.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../context/categories";
import { VideoContext } from "../../context/videos";
import { createVideo } from '../../api';
import Input from "../Input";
import InputSelect from "../InputSelect";
import TextArea from "../TextArea";
import Button from "../Button";

function NewVideo() {
    const { categories }= useContext(CategoryContext);
    const { setVideos } = useContext(VideoContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Back End");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");
    const [description, setDescription] = useState("");

    const handleCreateVideo = async (e) => {
        e.preventDefault();

        const newVideo = {
            title,
            category,
            image,
            video,
            description,
        };

        try {
            const createdVideo = await createVideo(newVideo);

            // Actualizar el estado del contexto con el nuevo video
            setVideos((prevVideos) => [...prevVideos, createdVideo]);

            // Redirigir a la ruta inicial
            navigate('/');
        } catch (error) {
            console.error('Error creating video:', error);
        }
    };

    const clearForm = () => {
        setTitle("");
        setCategory("");
        setImage("");
        setVideo("");
        setDescription("");
    }

    return(
        <form onSubmit={handleCreateVideo}> 
            <h3 className={`fs-2 ${styles.formTitle}`}>Crear Tarjeta</h3>
            <div className="d-md-flex gap-3">
                <div className="w-100">
                    <Input label="Título" placeholder="Ingresa el título del video" type="text" value={title} required setValue={setTitle}/>
                </div>
                <div className="w-100">
                    <InputSelect label="Categoría" options={categories} value={category} required setCategory={setCategory}/>
                </div>
            </div>
            <div className="d-md-flex gap-3">
                <div className="w-100">
                    <Input label="Imagen" placeholder="Ingresa el link a la imagen del video" value={image} type="text" required setValue={setImage}/>
                </div>
                <div className="w-100">
                    <Input label="Video" placeholder="Ingresa el link al video" type="text" value={video} required setValue={setVideo}/>
                </div>
            </div>
            <TextArea label="Descripción" required value={description} setValue={setDescription}/>
            <div className={`d-flex justify-content-end gap-2 ${styles.buttons}`}>
                <button className="btn btn-primary" onClick={clearForm} type="button">Limpiar</button>
                <Button icon="bi-plus-circle-fill" primaryColor="transparent" textColor="#3f90f2" type="submit">Crear</Button>
            </div>
        </form>
    )
}

export default NewVideo;

