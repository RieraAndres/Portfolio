import LogoHTML from "../../Assets/Logo/LogoHTML.png"
import LogoCss from "../../Assets/Logo/LogoCss.png"
import LogoReact from "../../Assets/Logo/LogoReact.png"
import LogoRedux from "../../Assets/Logo/LogoRedux.png"
import LogoSequilize from "../../Assets/Logo/LogoSequilize.png"
import LogoPostgresql from "../../Assets/Logo/LogoPostgresql.png"
import LogoJS from "../../Assets/Logo/LogoJS.png"
import LogoExpress from "../../Assets/Logo/LogoExpress.png"
import CardTec from "../CardTec/CardTec"
import styles from "./CardsTec.module.css"
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";

function CardsTec() {
  const Dark = useSelector((state) => state.dark);
  const English = useSelector((state) => state.english);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const controls = useAnimation();

  const isInViewport = (element, offset = 200) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top + offset >= 0 &&
      rect.left >= 0 &&
      rect.bottom - offset <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  

  const handleScroll = () => {
  if (containerRef.current && isInViewport(containerRef.current, 300)) {
    setIsVisible(true);
  }
};


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Inicia la animación cuando el elemento es visible
      controls.start({ opacity: 1, transition: { duration: 0.5 } });
    }
  }, [isVisible, controls]);

  const Tecnologias = [
    {Logo: LogoHTML , Tec: "HTML"},
    {Logo: LogoCss , Tec: "CSS"},
    {Logo: LogoReact , Tec: "React"}, 
    {Logo: LogoRedux , Tec: "Redux"},
    {Logo: LogoSequilize , Tec: "Sequilize"},
    {Logo: LogoPostgresql , Tec: "PostgreSQL"},
    {Logo: LogoJS , Tec: "JavaScript"},
    {Logo: LogoExpress , Tec: "Express"}
]

  return (
    <motion.div
      className={`${Dark ? styles.containerDark : styles.containerLight}`}
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={controls}
      id="seccion-tecnologias"
    >
      <div className={styles.titleContainer}>
        <p className={Dark ? styles.titleDark : styles.titleLigth}>
          {English ? "TECHNOLOGIES" : "TECNOLOGIAS"}
        </p>
        <p className={Dark ? styles.subTitleDark : styles.subTitleLight}>
          {English
            ? "|| This are some of the technologies I work with"
            : "||Estas son algunas de las tecnologias con las que trabajo"}
        </p>
      </div>
      <div className={styles.DivCards}>
        {Tecnologias.map((Tecnologia, index) => (
          <CardTec key={index} Tecnologia={Tecnologia} />
        ))}
      </div>
    </motion.div>
  );
}

export default CardsTec;
