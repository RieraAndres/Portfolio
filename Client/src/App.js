import { useSelector } from "react-redux";
import "./App.css";
import CardsTec from "./Components/CardsTec/CardsTec";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Inicio from "./Components/Inicio/Inicio";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import NavBar from "./Components/NavBar/NavBar";
import Proyects from "./Components/Proyects/Proyects";
import RightSideBar from "./Components/RightSideBar/RightSideBar";

function App() {
  const Dark = useSelector((state) => state.dark);
  return (
    <div className={Dark ? "AppDark" : "AppLight"}>
      <NavBar></NavBar>
      <Inicio></Inicio>
      <LeftSideBar></LeftSideBar>
      <RightSideBar></RightSideBar>
      <CardsTec></CardsTec>
      <Proyects></Proyects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
