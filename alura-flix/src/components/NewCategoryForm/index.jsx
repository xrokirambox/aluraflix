import styles from "./NewCategoryForm.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../context/categories";
import { createCategory } from '../../api';
import Input from "../Input";
import Button from "../Button";

function NewCategory() {
    const { setCategories } = useContext(CategoryContext);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [background, setBackground] = useState("#99229B");
  

    const handleCreateCategory = async (e) => {
        e.preventDefault();

        const newCategory = {
            name,
            background,
        };

        try {
            const createdCategory = await createCategory(newCategory);
            // Actualizar el estado del contexto con el nuevo video
            console.log(createdCategory);
            setCategories((prevCategories) => [...prevCategories, createdCategory]);

            // Resetear el formulario después de crear el video
            setName("");
            setBackground("");

            // Redirigir a la ruta inicial
            navigate('/');
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };
    
    const clearForm = () => {
        setName("");
        setBackground("#99229B");
    }

    return(
        <form onSubmit={handleCreateCategory}> 
            <h3 className={`fs-2 my-5 ${styles.formTitle}`}>Crear Categoria</h3>
            <div className="d-md-flex gap-3">
                <div className="w-100">
                    <Input label="Nombre" placeholder="Ingresa el nombre de la categoria" type="text" required value={name} setValue={setName}/>
                </div>
                <div className={`w-100 ${styles.color}`}>
                    <Input label="Color" placeholder="Ingresa el nombre de la categoria" type="color" required value={background} setValue={setBackground}/>
                </div>
            </div>
            <div className={`d-flex justify-content-end mt-5 gap-2 ${styles.buttons}`}>
                <button className="btn btn-primary" onClick={clearForm} type="button">Limpiar</button>
                <Button icon="bi-plus-circle-fill" primaryColor="transparent" textColor="#3f90f2" type="submit">Crear</Button>
            </div>
        </form>
    )
}

export default NewCategory;

