import { useContext } from 'react';
import { CategoryContext } from '../../context/categories';
import styles from "./Carousel.module.css";
import Banner from "../Banner";
import { useFavoritosContext } from '../../context/favorites';

function Carousel(){

    
    const {categories} = useContext(CategoryContext);
    const { favorito } = useFavoritosContext(); 

    if(favorito.length === 0){
        return( 
            <div className={styles.carousel}>
                <div className='carousel-inner'>   
                    <Banner 
                        key="0"
                        title="Challenge React" 
                        description="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
                        category="Front End"
                        image="https://raw.githubusercontent.com/xrokirambox/aluraflix/refs/heads/main/imagen/player.png"
                        backgroundColor="#6BD1FF" />
                </div>
                
            </div>
        )
    }

    return(
        <div id="carouselBanner" className={`carousel slide ${styles.carousel}`}>
            <div className="carousel-indicators">
                {favorito.map((video, index) => (
                    <button
                        key={video.id}
                        type="button"
                        data-bs-target="#carouselBanner"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {favorito.map((video, index) => {
                    
                    const category = categories.find(cat => cat.name === video.category);
                    const backgroundColor = category ? category.background : '#007bff';

                    return (
                        <div key={video.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <Banner {...video} backgroundColor={backgroundColor} />
                        </div>
                    );
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanner" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselBanner" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )

}

export default Carousel;