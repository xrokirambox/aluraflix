import styles from "./NewCategory.module.css";
import NewCategoryForm from "../../components/NewCategoryForm";

function NewCategory(){
    return(
        <section className={`container my-5 ${styles.page}`}>
            <h2 className={`display-4 ${styles.pageTitle}`}>NUEVA CATEGORIA</h2>
            <p className={`lead fs-6 ${styles.pageParagraph}`}>Complete el formulario para crear una nueva categoria</p>
            <NewCategoryForm />
        </section>
    )

}

export default NewCategory;