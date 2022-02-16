import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHome, faBlog, faAt, faDownload } from '@fortawesome/free-solid-svg-icons'
export default function Nav() {
    return (
        <ul className="nav-menu container">
            <li className="nav-item"><a><FontAwesomeIcon icon={faHome} /><span>Home</span></a></li>
            <li className="nav-item"><a ><FontAwesomeIcon icon={faCode} /><span>Projects</span></a></li>
            <li className="nav-item"><a><FontAwesomeIcon icon={faBlog} /><span>Blog</span></a></li>
            <li className="nav-item"><a><FontAwesomeIcon icon={faAt} /><span>Contact</span></a></li>
            <li className="nav-item nav-resume"><a><FontAwesomeIcon icon={faDownload} /><span>resume</span></a></li>
        </ul>
    )
}