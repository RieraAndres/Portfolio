import styles from "../NavBar/NavBar.module.css"
import {motion, useAnimation} from 'framer-motion'
import { useDispatch, useSelector } from "react-redux";
import LightLogo from '../../Assets/Logo/LogoLight.png'
import DarkLogo from '../../Assets/Logo/LogoDark.png'
import { changeMode, changeToEnglish, changeToSpanish } from "../../Redux/Actions";
function NavBar() {
    const dispatch = useDispatch()
    const Dark = useSelector((state)=>state.dark)
    const Language = useSelector((state)=>state.english)
    const containerVariants={
        hidden:{x:-2000},
        visible:{x:0,
        transition:{
            duration:1
        }}
    }
    const handleDark = () => {
        dispatch(changeMode())
      };

    const handleEnglish = (e)=>{
        dispatch(changeToEnglish())
    }

    const handleSpanish = ()=>{
        dispatch(changeToSpanish())
    }
    
    const controls = useAnimation()

    const scrollToInicio = async () => {
      const destino = document.getElementById("seccion-inicio")
        if(destino){
          await controls.start({y:destino.offsetTop })
          window.scrollTo({top: destino.offsetTop, behavior: 'smooth'})
        }
      }
    
      const scrollToTecnologias = async () => {
        const destino = document.getElementById("seccion-tecnologias")
          if(destino){
            await controls.start({y:destino.offsetTop})
            window.scrollTo({top: destino.offsetTop - 60, behavior: 'smooth'})
          }
        }

      const scrollToProyectos = async () => {
        const destino = document.getElementById("seccion-proyectos")
          if(destino){
            await controls.start({y:destino.offsetTop})
            window.scrollTo({top: destino.offsetTop - 50, behavior: 'smooth'})
          }
      }

      const scrollToContacto = async () => {
        const destino = document.getElementById("seccion-contacto")
          if(destino){
            await controls.start({y:destino.offsetTop})
            window.scrollTo({top: destino.offsetTop - 60, behavior: 'smooth'})
          }
      }
  return (
    <div className={Dark? styles.ContainerDark : styles.ContainerLight}>
            <motion.div  
                className={styles.LinksContainer}
                initial= "hidden"
                animate="visible"
                variants={containerVariants}>
                    <img src={Dark ? DarkLogo : LightLogo} alt="" className={styles.logo}></img>
                    <p className={Dark ? styles.LinkDark : styles.LinkLight} onClick={scrollToInicio}>{Language ? "Home" : "Inicio" }</p>
                    <p className={Dark ? styles.LinkDark : styles.LinkLight} onClick={scrollToTecnologias}>{Language ? "Technologies" : "Tecnologias"}</p>
                    <p className={Dark ? styles.LinkDark : styles.LinkLight} onClick={scrollToProyectos}>{Language ? "Proyects" : "Proyectos"}</p>
                    <p className={Dark ? styles.LinkDark : styles.LinkLight} onClick={scrollToContacto}>{Language ? "Contact" : "Contacto"}</p>
                    <label className={styles.switchContainer} >
                    <input type="checkbox" onChange={handleDark}/>
                    <span className={styles.slider}></span>
                    </label> 
                    <p className={Dark ? styles.LinkDark : styles.LinkLight} onClick={handleEnglish}>EN</p>
                    <p className={Dark ? styles.LinkDark : styles.LinkLight} onClick={handleSpanish}>ES</p>
            </motion.div >
    </div>
  );
}

export default NavBar;