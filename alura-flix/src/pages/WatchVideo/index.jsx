import styles from "./WatchVideo.module.css";
import { useParams } from "react-router-dom";
import { VideoContext } from "../../context/videos";
import NotFound from "../../pages//NotFound";
import { useContext } from "react";

function WatchVideo(){
	const parametros = useParams();
    const { videos } = useContext(VideoContext);
	const video =  videos.find(video => video.id === Number(parametros.id));

	if(!video){
		return <NotFound />
	}
	return(
		<div className={`container ${styles.page}`}>
			
			<h1>Estas viendo <span>{video.title}</span></h1>
			
			<section className={styles.iframe}> 
				<iframe width="100%" height="100%" 
								src={video.video} 
								title={video.title} 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								referrerPolicy="strict-origin-when-cross-origin" 
								allowFullScreen>
				</iframe>
			</section>
		</div>
	)
}

export default WatchVideo;