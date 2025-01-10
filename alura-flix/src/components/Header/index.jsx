import Button from "../Button";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
                <img src="/img/logo.png" />
            </Link>
        
            <div>
                <Link to="/newCategory">
                    <Button icon="bi-plus-square" primaryColor="#03122F" textColor="#2271D1">Categoría</Button>
                </Link>
                <Link to="/newVideo">
                    <Button icon="bi-plus-square" primaryColor="#03122F" textColor="#ffffff">Video</Button> 
                </Link>
                
            </div>
   
        </header>
        
    )

}

export default Header;