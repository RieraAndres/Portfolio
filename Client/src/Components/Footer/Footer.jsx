import styles from "./Footer.module.css"
import LogoGitHubLigth from "../../Assets/Logo/LogoGitHubLight.png"
import LogoGitHubDark from "../../Assets/Logo/LogoGitHubDark.png"
import LogoMailLigth from "../../Assets/Logo/LogoMailLight.png"
import LogoMailDark from "../../Assets/Logo/LogoMailDark.png"
import LogoLinkedinLight from "../../Assets/Logo/LogoLinkedinLight.png"
import LogoLinkedinDark from "../../Assets/Logo/LogoLinkedinDark.png"
import LogoCVLight from "../../Assets/Logo/LogoCVLight.png"
import LogoCVDark from "../../Assets/Logo/LogoCVDark.png"
import { useSelector } from "react-redux"


function Footer() {
    const Dark = useSelector((state)=>state.dark)
    const Language = useSelector((state)=>state.english)
    
  return (
    <div className={Dark ? styles.footerContainerDark : styles.footerContainerLight}>
      <div>
      <a href="https://www.linkedin.com/in/riera-andres9/" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoLinkedinDark : LogoLinkedinLight} alt="" className={styles.socials}></img></a>
        <a href="https://github.com/RieraAndres" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoGitHubDark : LogoGitHubLigth} alt="" className={styles.socials}></img></a>
        <a href="mailto:andresriera9999@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoMailDark : LogoMailLigth} alt="" className={styles.socials}></img></a>
        <a href={Language ? "https://drive.google.com/file/d/1eMqnapKiCcFfB8b3G82wiNqz7DZ5GfT9/view?usp=sharing" : "https://drive.google.com/file/d/1PNW8r01XffEU1pwLM29cMqWOr5kihorB/view?usp=sharing"} target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoCVDark : LogoCVLight} alt="" className={styles.socials}></img></a>      
      </div>
      <div>
        <p className={Dark ? styles.developDark : styles.developLight}>{Language ? "Develop by Andrés Riera" : "Desarrollado por Andrés Riera"}</p>
      </div>
    </div>
  );
}

export default Footer;