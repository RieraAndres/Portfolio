import styles from "./Proyects.module.css"
import {  useSelector } from "react-redux";
import HenryFoods from "../../Assets/Proyectos/HenryFoods.webp"
import PatitasSinHogar from "../../Assets/Proyectos/PatitasSinHogar.webp"
import EliteControllers from "../../Assets/Proyectos/EliteControllers.webp"
import CarmenJanetIngaColonia from "../../Assets/Proyectos/CarmenJanetIngaColonia.webp"
import AndreAkira from "../../Assets/Proyectos/AndreAkira.webp"
import PortalDistribuidora from "../../Assets/Proyectos/PortalDistribuidora.webp"
import Opina from "../../Assets/Proyectos/Opina.webp"
import LogoGitHubLight from "../../Assets/Logo/LogoGitHubLight.png"
import LogoGitHubDark from "../../Assets/Logo/LogoGitHubDark.png"
import LogoNetLight from "../../Assets/Logo/LogoNetLight.png"
import LogoNetDark from "../../Assets/Logo/LogoNetDark.png"
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";




function Proyects() {
    const Dark = useSelector((state)=>state.dark)
    const Language = useSelector((state)=>state.english)
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
      if (containerRef.current && isInViewport(containerRef.current, 2000)) {
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

  return (
    <motion.div 
     className={Dark ? styles.ContainerDark : styles.ContainerLight} 
     id="seccion-proyectos"
     ref={containerRef}
     initial={{ opacity: 0 }}
     animate={controls}>
      <div className={styles.titleContainer}>
        <p className={Dark ? styles.titleDark : styles.titleLight}>{Language ? "Projects" : "Proyectos"}</p>
        <p className={Dark ? styles.subTitleDark : styles.subTitleLight}>{Language ? "|| This are some projects where I worked" : "|| Estos son algunos de los proyectos en los que e trabajado"}</p>
      </div>
      <div className={styles.proyecto}>
        <p className={styles.proyectTitle}>Elite Controllers</p>
        <p className={Dark ? styles.proyectDescriptionDark : styles.proyectDescriptionLight}>{Language ? "This web  was developed during my fulltime experience as a WordPress developer in EasyLife Marketing from Spain. Elite Controllers offers the latest innovations in console controllers. I developed a three section website, Home, Contact and Services" : "Esta web fue desarrollada durante mi expreriencia fulltime como desarrollador WordPress para la empresa EasyLife Marketing de España. Elite Controllers ofrece las últimas innovaciones en mandos para consolas. Se le desarrollo una web de tres secciones, Inicio, Contacto y Servicios donde se plasmo lo previamente acordado con la cliente"}
        </p>
        <div className={styles.imgAndLogo}>
            <img src={EliteControllers} alt="" className={styles.proyectImg}></img>
            <a href="https://elitecontrollers.es/" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoNetDark : LogoNetLight} alt="" className={styles.logo}></img></a>
            <p className={Dark ? styles.techDark : styles.techLight}>WordPress | ElementorPro | Canva </p>
        </div>
      </div>
      <div className={styles.proyecto}>
        <p className={styles.proyectTitle}>Andre Akira Inmobiliaria</p>
        <p className={Dark ? styles.proyectDescriptionDark : styles.proyectDescriptionLight}>{Language ? "This web  was developed during my fulltime experience as a WordPress developer in EasyLife Marketing from Spain. Andre Akira is a real estate company dedicated to making your real estate dreams a reality. With competitive rates and unwavering support . I developed a three section website, Home, Contact and Services" : "Esta web fue desarrollada durante mi expreriencia fulltime como desarrollador WordPress para la empresa EasyLife Marketing de España. Andre Akira es una empresa inmobiliaria dedicada a hacer realidad tus sueños inmobiliarios. Con tarifas competitivas y un apoyo absoluto. Se le desarrollo una web de tres secciones, Inicio, Contacto y Servicios donde se plasmo lo previamente acordado con la cliente"}
        </p>
        <div className={styles.imgAndLogo}>
            <img src={AndreAkira} alt="" className={styles.proyectImg}></img>
            <a href="https://realestateinvestments.es/" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoNetDark : LogoNetLight} alt="" className={styles.logo}></img></a>
            <p className={Dark ? styles.techDark : styles.techLight}>WordPress | ElementorPro | Canva </p>
        </div>
      </div>
      <div className={styles.proyecto}>
        <p className={styles.proyectTitle}>Carmen Janet Inga Colonia</p>
        <p className={Dark ? styles.proyectDescriptionDark : styles.proyectDescriptionLight}>{Language ? "This web  was developed during my fulltime experience as a WordPress developer in EasyLife Marketing from Spain. Carmen Janet Inga Colonia is dedicated to offering editorial solutions that stand out for their excellence and customization. I developed a three section website, Home, Contact and Services" : "Esta web fue desarrollada durante mi expreriencia fulltime como desarrollador WordPress para la empresa EasyLife Marketing de España. Carmen Janet Inga Colonia se dedica a ofrecer soluciones editoriales que destacan por su excelencia y personalización. Se le desarrollo una web de tres secciones, Inicio, Contacto y Servicios donde se plasmo lo previamente acordado con la cliente"}
        </p>
        <div className={styles.imgAndLogo}>
            <img src={CarmenJanetIngaColonia} alt="" className={styles.proyectImg}></img>
            <a href="https://carmenjanetingacolonia.es/" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoNetDark : LogoNetLight} alt="" className={styles.logo}></img></a>
            <p className={Dark ? styles.techDark : styles.techLight}>WordPress | ElementorPro | Canva </p>
        </div>
      </div>
      <div className={styles.proyecto}>
        <p className={styles.proyectTitle}>opina.net.ar</p>
        <p className={Dark ? styles.proyectDescriptionDark : styles.proyectDescriptionLight}>{Language ? "Opina.net.ar is a website developed for a client who main objetive is to collect information through surveys. A database was developed to save the surveys and answers with the posibility to download the data in CVS format in order to manage the information through Microsoft Excel. Surveys can be launch by the client and can be managed in the admin dashboard available on the website" : "Opina.net.ar es una pagina web desarrollada a medida para un cliente cuyo principal objetivo es el de recolectar datos a traves de encuestas, estas encuentas son personalizables y pueden ser lanzadas por el mismo cliente. Se creo una base de datos que aloja las mismas con sus respuestas dando la posibilidad al cliente de descargar los datos en formato CVS para luego ser manipulados en Microsoft Excel. La pagina cuenta con un dashboard de administrador donde las encuestas pueden ser eliminadas y lanzadas o deshabilitadas"}
        </p>
        <div className={styles.imgAndLogo}>
            <img src={Opina} alt="" className={styles.proyectImg}></img>
            <a href="https://github.com/RieraAndres/opina.com" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoGitHubDark : LogoGitHubLight} alt="" className={styles.logo}></img></a>
            <a href="https://www.opina.net.ar/" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoNetDark : LogoNetLight} alt="" className={styles.logo}></img></a>
            <p className={Dark ? styles.techDark : styles.techLight}>React | Redux | Node | NodeMailer | Express | Cloudinary</p>
        </div>
      </div>
      <div className={styles.proyecto}>
        <p className={styles.proyectTitle}>Portal Distribuidora</p>
        <p className={Dark ? styles.proyectDescriptionDark : styles.proyectDescriptionLight}>{Language ? "Portal Distribuidora is a local business who asked me to develop for them a landing page to show the world who they are and how they work. In this case I developed the page with a colleague. On the website you can contact them through a form which is sent to the company via email and I used the Google Maps API tho show the location of the branch offices." : "Portal Distribuidora es una empresa local a la cual desarrolle una Landing Page informativa para mostrar al mundo como trabajan y quienes son. En este caso el projecto fue desarrollado en conjunto con un colega. A travez de la pagina se puede mantener contacto con la empresa mediante un formulario el cual se envia al mail de la misma, tambien se implemento la API de Google Maps para poder mostrar la ubicacion de todas las sucursales que esta empresa tiene."}
        </p>
        <div className={styles.imgAndLogo}>
            <img src={PortalDistribuidora} alt="" className={styles.proyectImg}></img>
            <a href="https://github.com/JaviZaldu/DistribuidoraPortal" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoGitHubDark : LogoGitHubLight} alt="" className={styles.logo}></img></a>
            <a href="https://distribuidoraportal.com/" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoNetDark : LogoNetLight} alt="" className={styles.logo}></img></a>
            <p className={Dark ? styles.techDark : styles.techLight}>React | Redux | Node | NodeMailer | GoogleMaps</p>
        </div>
      </div>
      {/* <div className={styles.proyecto}>
      <p className={styles.proyectTitle}>Patitas sin Hogar</p>
        <p className={Dark ? styles.proyectDescriptionDark : styles.proyectDescriptionLight}>{Language ? "Patitas sin hogar is a website where our main objetive is to help people to adopt pets without home, with this website we make an easier contact between both sides. Each user can upload as many pets as they want to their profile and they will be visible to any other user who want to adopt a pet. The website has a review and donations section. For the website owner it has an admin dashboard where you can fully manage users , reviews ,publications and donations" : "Patitas sin hogar es una aplicacion web en la cual fomentamos y ayudamos a personas a adoptar mascotas que no tienen hogar, esto lo hacemos facilitando el contacto entre la persona adoptante y la que da en adopcion. Cada usuario podra cargar cuantas mascotas quiera a su perfil y seran visibles para cualquier usuario que este buscando un nuevo compañero. Cuenta con una seccion de reseñas y de donaciones, como asi tambien un dashboard de administrador para gestionar publicaciones, usuarios, reseñas y donaciones"}
        </p>
        <p className={Dark ? styles.proyectDescriptionDark : styles.proyectDescriptionLight}>
            {Language ? "In this opportunity I integrate the FrontEnd team, using methodologies such as Scrum, Git and GitFLow. This proyect was part of SoyHenry Bootcamp" : "En esta oportunidad integre el equipo de FrontEnd, utilizando metodologia Scrum y herramientas como Git y GitFlow. Este proyecto fue parte de SoyHenry Bootcamp"}
        </p>
        <div className={styles.imgAndLogo}>
            <img src={PatitasSinHogar} alt="" className={styles.proyectImg}></img>
            <a href="https://github.com/RieraAndres/Henry_PF.git" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoGitHubDark : LogoGitHubLight} alt="" className={styles.logo}></img></a>
            <a href="https://henry-pf-git-main-rieraandres.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={Dark ? LogoNetDark : LogoNetLight} alt="" className={styles.logo}></img></a>
            <p className={Dark ? styles.techDark : styles.techLight}>React | Redux | Express | PostgreSQL | Sequilize | Node | Bootstrap | Scrum | Cloudinary | MercadoPagoApi | NodeMailer | GoogleAuth</p>
        </div>
      </div> */}
    </motion.div>
  );
}

export default Proyects;