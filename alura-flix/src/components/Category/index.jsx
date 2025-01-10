import styles from "./Category.module.css";
import Card from "../Card";
import { useContext } from "react";
import { VideoContext } from "../../context/videos";
import TitleCategory from "../TitleCategory";
import NoFoundMsg from "../NoFoundMsg";

function Category({ name, backgroundColor }) {
    const { videos } = useContext(VideoContext);

    if (!Array.isArray(videos)) {
        return (
            <section className={`container my-5 align-items-center align-items-lg-start ${styles.section}`}>
                <NoFoundMsg icon="bi-arrow-clockwise" msg="Cargando videos"/>
            </section>);
    }

    const categoryVideos = videos.filter(video => video.category === name);

    if (categoryVideos.length === 0) {
        return (
        <section className={`container my-5 align-items-center align-items-lg-start ${styles.section}`}>
            <TitleCategory backgroundColor={backgroundColor}>{name}</TitleCategory>
            <NoFoundMsg icon="bi-emoji-dizzy" msg="No hay videos en esta categoría"/>
        </section>
        );
    }

    return (
        <section className={`container my-5 align-items-center align-items-lg-start ${styles.section}`}>
            <TitleCategory backgroundColor={backgroundColor}>{name}</TitleCategory>
            <section className={styles.sectionCards}>
                {categoryVideos.map(video => <Card key={video.id} {...video} backgroundColor={backgroundColor} />)}
            </section>
        </section>
    );
}

export default Category;
