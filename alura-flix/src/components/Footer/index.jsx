import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className={styles.footer}>
            <Link to="/">
                <img src="/img/logo.png" alt="" />
            </Link>
            <div>
                <i className="bi bi-c-circle"></i>
                <p>Elaborado por: <a href="https://www.linkedin.com/in/julian-guardiola-s/" target="blank" >Julian Guardiola</a></p>
            </div>
        </footer>
    )

}

export default Footer;