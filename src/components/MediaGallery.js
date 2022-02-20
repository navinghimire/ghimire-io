import { useState } from "react"
import { motion } from "framer-motion";
import './MediaGallery.css'
const MediaGallery = ({media}) => {

    const [currentImageIndx, setCurrentImageIndx] = useState()
    

    const imageList = media.map((image,id) => <motion.img
        layout 
        animate={{opacity:1}} 
        initial={{opacity:0}}
        exit ={{opacity:0}}
        key={id}
        src ={require(`../images/Secret_Hitler_Game/${image}`)} 
        onClick = {() => {setCurrentImageIndx(id)}}
        className = {id === currentImageIndx ? 'selectedImage':''}
        />)
    return(
        <motion.div layout className="project-images"> 
            {/* <div className="images-nav">
                <button onClick={() => {setCurrentImageIndx(prevIndx => (prevIndx+1)%media.length)
                }}><FontAwesomeIcon icon={faAngleLeft}/></button>
                <button onClick={() => {setCurrentImageIndx(prevIndx => (prevIndx-1+media.length)%media.length)
                }}><FontAwesomeIcon icon={faAngleRight}/></button>
            </div> */}
            <motion.div layout className="image-list">
                {imageList}
            </motion.div>

        </motion.div>
    )
}
export default MediaGallery