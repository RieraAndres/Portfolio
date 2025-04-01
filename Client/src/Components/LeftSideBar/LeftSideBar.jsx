import styles from "./LeftSideBar.module.css"
import LogoGitHubLigth from "../../Assets/Logo/LogoGitHubLight.png"
import LogoGitHubDark from "../../Assets/Logo/LogoGitHubDark.png"
import LogoMailLigth from "../../Assets/Logo/LogoMailLight.png"
import LogoMailDark from "../../Assets/Logo/LogoMailDark.png"
import LogoLinkedinLight from "../../Assets/Logo/LogoLinkedinLight.png"
import LogoLinkedinDark from "../../Assets/Logo/LogoLinkedinDark.png"
import LogoCVLight from "../../Assets/Logo/LogoCVLight.png"
import LogoCVDark from "../../Assets/Logo/LogoCVDark.png"
import {motion} from 'framer-motion'
import { useSelector } from "react-redux"

function LeftSideBar() {
    const Dark = useSelector((state)=>state.dark)
    const Language = useSelector((state)=>state.english)
    const containerVariants={
        hidden:{x:-100},
        visible:{x:0,
        transition:{
            duration:1
        }}
    }

  return (
    <motion.div 
    className={styles.Container}
    initial= "hidden"
    animate="visible"
    variants={containerVariants}>
        <a href="https://www.linkedin.com/in/riera-andres9/" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoLinkedinDark : LogoLinkedinLight} alt="" className={styles.socials}></img></a>
        <a href="https://github.com/RieraAndres" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoGitHubDark : LogoGitHubLigth} alt="" className={styles.socials}></img></a>
        <a href="mailto:andresriera9999@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoMailDark : LogoMailLigth} alt="" className={styles.socials}></img></a>
        <a href={Language ? "https://drive.google.com/file/d/1NqpRIu-5e2fZYb9aenILrVAxmXt_t8bc/view?usp=drive_link": "https://drive.google.com/file/d/1-1SIpoY8mutlgPoVRc0BBO-17mnAcwic/view?usp=drive_link"} target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoCVDark : LogoCVLight} alt="" className={styles.socials}></img></a>
    </motion.div>
  );
}

export default LeftSideBar;