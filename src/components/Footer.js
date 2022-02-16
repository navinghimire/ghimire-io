
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
export default function Footer() {
    return(
        <footer className="container">
            <h2>Get in touch</h2>
            <a href="#"><FontAwesomeIcon icon={faLinkedin}/> /navinghimire</a>
            <a href="#"><FontAwesomeIcon icon={faGithub}/> /navinghimire</a>
        </footer>
    )
}