import styles from "./NotFound.module.css";
import NoFoundMsg from "../../components/NoFoundMsg";

function NotFound(){
    return(
        <section className={`container my-5 ${styles.page}`}>
            <h2 className={`display-4 ${styles.pageTitle}`}>¡Ups!</h2>
            <NoFoundMsg icon="bi-heartbreak" msg="La página no existe" />
        </section>
    )

}

export default NotFound;