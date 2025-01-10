import styles from "./TitleCategory.module.css";

function TitleCategory({children, backgroundColor }){
    const categoryColor = {
        '--background-color': backgroundColor,
    }
    return(
        <div className={`rounded ${styles.titleCategory}`} style={categoryColor}>
            <h2 className="fs-6">{children}</h2>
        </div>
    )

}

export default TitleCategory;