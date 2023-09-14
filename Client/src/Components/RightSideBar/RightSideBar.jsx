import { useSelector } from "react-redux";
import styles from "./RightSideBar.module.css"
import {motion} from 'framer-motion'

function RightSideBar() {
    const Dark = useSelector((state)=>state.dark)
    const containerVariants={
        hidden:{x:-100,rotate:0},
        visible:{
            x:0,
            rotate:90,
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
        <a className={Dark ? styles.mailDark : styles.mailLight} href="mailto:andresriera9999@gmail.com" target="_blank" rel="noopener noreferrer">-----andresriera9999@gmail.com-----</a>
    </motion.div>
  );
}

export default RightSideBar;