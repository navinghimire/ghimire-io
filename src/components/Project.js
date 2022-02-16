import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { AnimatePresence, motion } from "framer-motion";
import MediaGallery from "./MediaGallery";
export default function Project(props) {
    const technologiesElem = props.project.technologies.map((tech,id) => <p key={id}>{tech}</p>)
    const gitHubUrl = 'https://github.com/navinghimire/'
    const imageElems = props.project.images.map(imgName => <img src={require(`../images/Secret_Hitler_Game/${imgName}`)}/>)
    return(
    <motion.div
        layout
        animate={{opacity:1, scale:1}}  initial={{opacity:0}} exit={{opacity:0}}
        transition={{ type: "spring", stiffness: 100 }}
     
        className="project">
        <div className="project-info"
       
        >
            <img className="backdrop-image" src= {require('../images/pawn.png')}/>
            <div layout className="project-main">
                <h1 className="project-title">{props.project.name}</h1>
                <p className="project-detail">
                {props.project.description}
                </p>
                <a href={gitHubUrl+props.project.github_url}><FontAwesomeIcon icon={faGithub} />View on Github</a>
            </div>
            <div className="project-tech">
                <h1>Tech Stack</h1>
                <div className="technologies">
                    {technologiesElem}
                </div>
            </div>

            
        </div>
      
        <MediaGallery media={props.project.images}/>

    </motion.div>


    
    
    )
}