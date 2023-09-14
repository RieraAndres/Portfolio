import styles from "./CardTec.module.css"

import { useSelector } from "react-redux"


function CardTec({Tecnologia}) {
    const Dark = useSelector((state)=>state.dark)
  return (
    <div className={Dark ? styles.CardContainerDark : styles.CardContainerLight}>
      <img src={Tecnologia.Logo} alt="" className={styles.img}></img>
      <p className={Dark ? styles.tecDark : styles.tecLight}>{Tecnologia.Tec}</p>
    </div>
  );
}

export default CardTec;