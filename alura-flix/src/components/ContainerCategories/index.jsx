import { useContext } from "react";
import Category from "../Category";
import { CategoryContext } from "../../context/categories";
import NoFoundMsg from "../NoFoundMsg";

function ContainerCategories(){

    const {categories} = useContext(CategoryContext);

    if(categories.length === 0){
        return(
            <section className={`container my-5 d-flex flex-column align-items-center align-items-lg-start`}>
                <NoFoundMsg icon="bi-emoji-dizzy" msg="No hay videos en esta categoría"/>
            </section>
        );
    }

    return(
        <>
        {
            categories.map((category) => <Category key={category.id} name={category.name} backgroundColor={category.background} />)
        }
        </>
    )
}

export default ContainerCategories;