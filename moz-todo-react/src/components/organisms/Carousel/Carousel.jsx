import React from "react";
import H2 from '../../atoms/H2/H2';
import A from "../../atoms/A/A";
import Image from '../../atoms/Image/Image';
import './Carousel.css';

const Carousel = () => {
    return (
        <div>
            <H2 id={"accion"} contenido={"Acción"} />
            <div id={"carousel-accion"} className={"carousel slide"} data-ride={"carousel"}>
                <div className={"carousel-inner"}>
                    <div className={"carousel-item active"}>
                        <A direccion={"accion1.html"}>
                            <Image src={"https://mx.web.img3.acsta.net/r_1280_720/img/ba/bd/babdedf294c1feddf0b3a4cbb50bd51d.jpg"} className={"d-block w-100"} alt={"El Padrino"} />
                        </A>
                    </div>
                    <div className={"carousel-item"}>
                        <A direccion={"accion2.html"}>
                            <Image src={"https://image.tmdb.org/t/p/original/hZUSv4mCne1DP05ihoVDoh8Dg0W.jpg"} className={"d-block w-100"} alt={"Batman El Caballero De La Noche"} />
                        </A>
                    </div>
                    <div className={"carousel-item"}>
                        <A direccion={"accion3.html"}>
                            <Image src={"https://mx.web.img3.acsta.net/pictures/19/07/22/05/38/5108155.jpg"} className={"d-block w-100"} alt={"12 Hombres en Pugna"} />
                        </A>
                    </div>
                    <div className={"carousel-item"}>
                        <A direccion={"accion4.html"}>
                            <Image src={"https://mx.web.img3.acsta.net/r_1280_720/medias/nmedia/18/66/03/76/18979736.jpg"} className={"d-block w-100"} alt={"La lista Schindler"} />
                        </A>
                    </div>
                    <div className={"carousel-item"}>
                        <A direccion={"accion5.html"}>
                            <Image src={"https://m.media-amazon.com/images/I/71X6YzwV0gL._AC_UF894,1000_QL80_.jpg"} className={"d-block w-100"} alt={"El Señor de los anillos: el retorno del rey"} />
                        </A>
                    </div>
                    <div className={"carousel-item"}>
                        <A direccion={"accion6.html"}>
                            <Image src={"https://image.tmdb.org/t/p/original/vruZ74rfN7LhykfkAJz21cVpN8M.jpg"} className={"d-block w-100"} alt={"Tiempos violentos"} />
                        </A>
                    </div>
                    <div className={"carousel-item"}>
                        <A direccion={"accion7.html"}>
                            <Image src={"https://mx.web.img3.acsta.net/pictures/14/03/21/13/49/293020.jpg"} className={"d-block w-100"} alt={"El Bueno el malo y el feo"} />
                        </A>
                    </div>
                    <div className={"carousel-item"}>
                        <A direccion={"accion8.html"}>
                            <Image src={"https://image.tmdb.org/t/p/original/9xtH1RmAzQ0rrMBNUMXstb2s3er.jpg"} className={"d-block w-100"} alt={"El señor de los anillos: La comunidad del anillo"} />
                        </A>
                    </div>
                    <div className={"carousel-item"}>
                        <A direccion={"accion9.html"}>
                            <Image src={"https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_medium/public/product-images/csm-movie/ready-player-one-poster0-min.jpg"} className={"d-block w-100"} alt={"Ready Player One"} />
                        </A>
                    </div>
                    <div className={"carousel-item"}>
                        <A direccion={"accion10.html"}>
                            <Image src={"https://m.media-amazon.com/images/I/71RVzX9VjdL._AC_UF894,1000_QL80_.jpg"} className={"d-block w-100"} alt={"Venom"} />
                        </A>
                    </div>
                </div>
            </div>

            <H2 id="infantiles" contenido="Infantiles"/>
            <div id="carousel-infantiles" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src="" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <A direccion="infantil1.html">
                            <Image src="https://image.tmdb.org/t/p/original/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg" className="d-block w-100" alt="El rey leon" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="infantil2.html">
                            <Image src="https://moviepostermexico.com/cdn/shop/products/aladdin_ver3_xxlg_1024x1024@2x.jpg?v=1572655747" className="d-block w-100" alt="Aladdin" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="infantil3.html">
                            <Image src="https://image.tmdb.org/t/p/original/gd07oN6IwqsWyQH5QiBphhbqLhU.jpg" className="d-block w-100" alt="La bella y la bestia" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="infantil4.html">
                            <Image src="https://lumiere-a.akamaihd.net/v1/images/p_bighero6_19753_20bd6206.jpeg" className="d-block w-100" alt="Big Hero 6" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="infantil5.html">
                            <Image src="https://image.tmdb.org/t/p/original/k7peWnDd1Vv57cXfPnJ15U8ZiTR.jpg" className="d-block w-100" alt="Ralph el demoledor" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="infantil6.html">
                            <Image src="https://image.tmdb.org/t/p/original/bFUreK1CxkUwk4y6W2Qoo88l0UF.jpg" className="d-block w-100" alt="Enredados" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="infantil7.html">
                            <Image src="https://image.tmdb.org/t/p/original/yO1URuLzfr75N2ulA0k5QXmXd16.jpg" className="d-block w-100" alt="La princesa y el sapo" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="infantil8.html">
                            <Image src="https://hips.hearstapps.com/hmg-prod/images/la-sirenita-poster-6476121aaf1ee.jpg" className="d-block w-100" alt="La sirenita" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="infantil9.html">
                            <Image src="https://lumiere-a.akamaihd.net/v1/images/p_fantasia_19641_cdb93769.jpeg" className="d-block w-100" alt="Fantasia" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="infantil10.html">
                            <Image src="https://image.tmdb.org/t/p/original/gs84R3mH9dUz56jvE6KcosRSNub.jpg" className="d-block w-100" alt="La era de hielo 2" />
                        </A>
                    </div>
                </div>
            </div>

            <H2 id="animadas" contenido="Animadas"/>
            <div id="carousel-animadas" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <A direccion="animada1.html">
                            <Image src="https://m.media-amazon.com/images/I/71hWkxTBHRL.jpg" className="d-block w-100" alt="Zootopia" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="animada2.html">
                            <Image src="https://image.tmdb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg" className="d-block w-100" alt="Shrek" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="animada3.html">
                            <Image src="https://i.pinimg.com/736x/56/8f/c0/568fc030f58881e41377eee8a63e9a7c.jpg" className="d-block w-100" alt="Sherk2" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="animada4.html">
                            <Image src="https://image.tmdb.org/t/p/original/36yXbBu8c1A0POyZKNLWjoVZOJH.jpg" className="d-block w-100" alt="Los Increibles" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="animada5.html">
                            <Image src="https://thescriptlab.com/wp-content/uploads/scripts/1560-poster-600x900-1.jpg" className="d-block w-100" alt="Los Minions" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="animada6.html">
                            <Image src="https://image.tmdb.org/t/p/original/7ml02WwUzz4jlZJdiEI4ZIYHj1J.jpg" className="d-block w-100" alt="Mi villano Favorito" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="animada7.html">
                            <Image src="https://m.media-amazon.com/images/I/81J7E7J2uhL._AC_UF894,1000_QL80_.jpg" className="d-block w-100" alt="Buscando a nemo" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="animada8.html">
                            <Image src="https://lumiere-a.akamaihd.net/v1/images/p_monstersuniversity_19752_34ba9b39.jpeg" className="d-block w-100" alt="Monsters University" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="animada9.html">
                            <Image src="https://moviepostermexico.com/cdn/shop/products/toy_story_ver1_xxlg_1983x.jpg?v=1574482259" className="d-block w-100" alt="Toy Story" />
                        </A>
                    </div>
                    <div className="carousel-item">
                        <A direccion="animada10.html">
                            <Image src="https://image.tmdb.org/t/p/original/lgBe9KD6DoLyQP28JZ6fSUGK8j0.jpg" className="d-block w-100" alt="Cars" />
                        </A>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
