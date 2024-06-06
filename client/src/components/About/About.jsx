import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import style from './About.module.css'

const About = () => {
    return(
        <div className={style.container}>
            <a href="https://github.com/KariRomero/piVideoGames" target="_blank">
                <FaGithub />
            </a>
            <br></br>
            <a href="https://www.linkedin.com/in/karinaromero-fullstack/" target="_blank">
                <FaLinkedin />
            </a>
        </div>
    );
};

export default About