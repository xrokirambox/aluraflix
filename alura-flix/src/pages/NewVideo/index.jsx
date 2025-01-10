import styles from "./NewVideo.module.css";
import NewVideoForm from "../../components/NewVideoForm";

function NewVideo(){
    return(
        <section className={`container my-5 ${styles.page}`}>
            <h2 className={`display-4 ${styles.pageTitle}`}>NUEVO VIDEO</h2>
            <p className={`lead fs-6 ${styles.pageParagraph}`}>Complete el formulario para crear una nueva tarjeta de video</p>
            <NewVideoForm />
        </section>
    )

}

export default NewVideo;