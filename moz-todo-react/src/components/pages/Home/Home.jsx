import React from "react";
import Image from "../../atoms/Image/Image";
import H1 from "../../atoms/H1/H1";
import Carousel from "../../organisms/Carousel/Carousel";
import Div2 from "../../organisms/Div2/Div2";
import PopularTable from "../../molecules/PopularTable/PopularTable";
import Bar from "../../templates/Bar/Bar";
import logo from "../../../assets/logo pirapelis.png";
import "../../../App.css";

const Home = () =>{
    return(
    <>
      <Bar/>
      <Image src={logo} className="Logo" alt="PiraPelis Logo"/>
      <H1 className="selector_clase" contenido="Peliculas Gratuitas"/>
      <Carousel/>
      <Div2/>
      <PopularTable/>
    </>
    );
}

export default Home;