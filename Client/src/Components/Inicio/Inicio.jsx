import { useSelector } from "react-redux";
import {motion} from 'framer-motion'
import styles from "./Inicio.module.css"

function Inicio() {
  const Dark = useSelector((state)=>state.dark)
  const Language = useSelector((state)=>state.english)

  const containerVariants={
    hidden:{y:-2000},
    visible:{y:0,
    transition:{
        duration:1.5
    }}
}
  return (
    <div id="seccion-inicio" className={Dark ? styles.containerDark : styles.containerLight}>
        <motion.div
        className={styles.dataContainer}
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
            <p className={Dark ? styles.welcomeDark : styles.welcomeLigth}>{Language ? "Welcome!" : "Bienvenido!"}</p>
            <h1 className={Dark ? styles.nameDark : styles.nameLigth}>Andrés Riera</h1>
            <h2 className={Dark ? styles.titleDark : styles.titleLight}>{Language ? "FullStack Developer" : "Desarrollador Web FullStack"}</h2>
            <p className={Dark ? styles.textDark : styles.textLigth}>{Language ?
             "I'm a FullStack Developer and my main objetive is to improve the IT world through creative and efficient solutions. I'm teamworker, i like to share new ideas and knowledge in order to improve and help on my current proyect"
              :
             " Soy un colaborador entusiasta y siempre estoy ansiosopor aprender y enfrentar nuevos desafíos. Me gusta trabajar en equipo,compartiendo ideas y conocimientos para lograr buenos resultados.Mi objetivo es seguir creciendo profesionalmente, aprendiendo nuevas tecnologías y mejores prácticas para desarrollar soluciones que impacten positivamente en la vida de las personas."}</p>
             <a className={styles.fancy} href="https://drive.google.com/file/d/1C8FE-_k4yALmmQnFKWEtNxdRahr6QUiN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <span className={styles.topKey}></span>
              <span className={styles.text}>Curriculum</span>
              <span className={styles.bottomKey1}></span>
              <span className={styles.bottomKey2}></span>
            </a>
        </motion.div>
    </div>
  );
}
export default Inicio;