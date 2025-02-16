import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://github.com/Wkyouma" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={24} color="#fff" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/_t3rpl4k_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram size={24} color="#e4405f" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/igor-terplak-gutierrez-54a814293/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={24} color="#0077b5" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
