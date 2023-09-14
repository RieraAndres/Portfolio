import { useDispatch, useSelector } from "react-redux";
import styles from "./Contact.module.css"
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { clearAux, sendEmail } from "../../Redux/Actions";
import { validateSpanish } from "./formValidatorSpanish";
import { validateEnglish } from "./formValidatorEnglish";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const dispatch = useDispatch()
  const Dark = useSelector((state)=>state.dark)
  const Language = useSelector((state)=>state.english)
  const alert = useSelector((state)=>state.auxState)

  useEffect(() => {
    if (alert) {
      toast.info(alert, {
        position: "top-center",
        autoClose: 2000,
        onClose:()=>{
          dispatch(clearAux())
        }
      });
    }
  }, [alert]);

  const [input , setInput] = useState({
    name:"",
    lastName:"",
    email:"",
    message:""
  })

  const [errors, setErrors]= useState({})


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    setErrors(
  Language
    ? 
      validateEnglish({
        ...input,
        [e.target.name]: e.target.value
      })
    : validateSpanish({
      ...input,
      [e.target.name]: e.target.value
    })
);

  };
  

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

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!errors.name && !errors.email && !errors.lastName && input.name && input.lastName && input.email){
      dispatch(sendEmail(input.name,input.lastName,input.email,input.message))
      setInput({
        name:"",
        lastName:"",
        email:"",
        message:""
      })
    }
  }

  return (
    <motion.div
     className={Dark ? styles.ContainerDark : styles.ContainerLight}
     id="seccion-contacto"
     ref={containerRef}
     initial={{ opacity: 0 }}
     animate={controls}>
      <div className={styles.titleContainer}>
        {alert && (<ToastContainer />)}
        <p className={Dark ? styles.titleDark : styles.titleLight}>{Language ? "Contact" : "Contacto"}</p>
        <p className={Dark ? styles.subTitleDark : styles.subTitleLight}>{Language ? "|| Send me a message or an email to andresriera9999@gmail.com" : "|| Enviame un mensaje o un correo electronico a andresriera9999@gmail.com"}</p>
      </div>
      <div className={styles.inputContainer} >
        <input type="text" autoComplete="name" name="name" value={input.name} placeholder={Language ? "Name:" : "Nombre:"} className={Dark ? styles.inputDark : styles.inputLight} onChange={handleInputChange}></input>
        {errors.name && <label className={styles.error}>{errors.name}</label>}
        <input type="text" name="lastName" autoComplete="name"  value={input.lastName} placeholder={Language ? "LastName:" : "Apellido:"} className={Dark ? styles.inputDark : styles.inputLight} onChange={handleInputChange}></input>
        {errors.lastName && <label className={styles.error}>{errors.lastName}</label>}
        <input type="text" name="email" value={input.email} autoComplete="email" placeholder={Language ? "Email:" : "Correo electronico:"} className={Dark ? styles.inputDark : styles.inputLight} onChange={handleInputChange} ></input>
        {errors.email && <label className={styles.error}>{errors.email}</label>}
        <textarea placeholder={Language ? "Message" : "Mensaje"} name="message" value={input.message} className={Dark ? styles.textareaDark : styles.textareaLight} onChange={handleInputChange}></textarea>
      </div>
      <div className={styles.buttonContainer}>
      <button className={Dark ? styles.buttonDark :styles.buttonLight} onClick={handleSubmit}>
        <span>{Language ? "Send" : "Enviar"}</span>
        <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
        </svg>
      </button>
      </div>
    </motion.div>
  );
}

export default Contact;