import TitleCategory from "../TitleCategory";
import Image from "../Image";
import styles from "./Banner.module.css";
import TruncatedText from "../TruncatedText";

function Banner({id, title, description, category, image, backgroundColor}){
    return(
        <div className={styles.banner}>
            <div className="container d-md-flex  w-100">
                <div className={styles.itemBanner}>
                    <TitleCategory backgroundColor={backgroundColor} >{category}</TitleCategory>
                    <h2 className={`fs-2 ${styles.title}`}><TruncatedText text={title} maxLength={20} /></h2>
                    <TruncatedText text={description} maxLength={180} />
                </div>
                <div className={styles.itemBannerImg}>
                    <Image id={id} src={image} title={title}/>
                </div>
            </div>
        </div>
    )
}

export default Banner;