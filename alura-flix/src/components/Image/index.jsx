import { Link } from "react-router-dom";
import styles from "./Image.module.css";

function Image({id, title, src}){
    console.log(id, title);
    return (
        <Link className={styles.link} to={`/${id}`}>
            <img className={styles.image} src={src} alt={title} />
        </Link>
    )
}

export default Image;