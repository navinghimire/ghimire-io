import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHome, faBlog, faAt, faDownload } from '@fortawesome/free-solid-svg-icons'
import './Nav.css'
export default function Nav() {
    return (
        <div className="nav">
            <ul className="nav-menu container">
                <li className="nav-item"><a><FontAwesomeIcon icon={faHome} /><span>Home</span></a></li>
                <li className="nav-item"><a ><FontAwesomeIcon icon={faCode} /><span>Projects</span></a></li>
                <li className="nav-item"><a><FontAwesomeIcon icon={faBlog} /><span>Blog</span></a></li>
                <li className="nav-item"><a><FontAwesomeIcon icon={faAt} /><span>Contact</span></a></li>
                <li className="nav-item nav-resume"><a><FontAwesomeIcon icon={faDownload} /><span>resume</span></a></li>
            </ul>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#AF5D36" fill-opacity="1" d="M0,256L48,266.7C96,277,192,299,288,293.3C384,288,480,256,576,213.3C672,171,768,117,864,106.7C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>


        </div>
    )
}