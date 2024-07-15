import React from "react";
import Bar from "../../templates/Bar/Bar";
import H2 from "../../atoms/H2/H2";
import A from "../../atoms/A/A";
import Image from "../../atoms/Image/Image";
import './Accion.css';

const CategoriaAccion = () => {
  return (
    <>
      <Bar />
      <H2 className="titulo" id="accion" contenido="Acción"/>
      <div className="movies-container">
        <div className="movie">
          <A direccion="accion1.html">
            <Image
              src="https://i.etsystatic.com/35681979/r/il/30d269/3910370144/il_570xN.3910370144_qpwh.jpg"
              alt="El Padrino"
            />
          </A>
        </div>
        <div className="movie">
          <A direccion="accion2.html">
            <Image
              src="https://image.tmdb.org/t/p/original/hZUSv4mCne1DP05ihoVDoh8Dg0W.jpg"
              alt="Batman El Caballero De La Noche"
            />
          </A>
        </div>
        <div className="movie">
          <A direccion="accion3.html">
            <Image
              src="https://mx.web.img3.acsta.net/pictures/19/07/22/05/38/5108155.jpg"
              alt="12 Hombres en Pugna"
            />
          </A>
        </div>
        <div className="movie">
          <A direccion="accion4.html">
            <Image
              src="https://mx.web.img3.acsta.net/r_1280_720/medias/nmedia/18/66/03/76/18979736.jpg"
              alt="La lista Schindler"
            />
          </A>
        </div>
        <div className="movie">
          <A direccion="accion5.html">
            <Image
              src="https://m.media-amazon.com/images/I/71X6YzwV0gL._AC_UF894,1000_QL80_.jpg"
              alt="El Señor de los anillos: el retorno del rey"
            />
          </A>
        </div>
        <div className="movie">
          <A direccion="accion6.html">
            <Image
              src="https://image.tmdb.org/t/p/original/vruZ74rfN7LhykfkAJz21cVpN8M.jpg"
              alt="Tiempos violentos"
            />
          </A>
        </div>
        <div className="movie">
          <A direccion="accion7.html">
            <Image
              src="https://mx.web.img3.acsta.net/pictures/14/03/21/13/49/293020.jpg"
              alt="El Bueno el malo y el feo"
            />
          </A>
        </div>
        <div className="movie">
          <A direccion="accion8.html">
            <Image
              src="https://image.tmdb.org/t/p/original/9xtH1RmAzQ0rrMBNUMXstb2s3er.jpg"
              alt="El señor de los anillos: La comunidad del anillo"
            />
          </A>
        </div>
        <div className="movie">
          <A direccion="accion9.html">
            <Image
              src="https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_medium/public/product-images/csm-movie/ready-player-one-poster0-min.jpg"
              alt="Ready Player One"
            />
          </A>
        </div>
        <div className="movie">
          <A direccion="accion10.html">
            <Image
              src="https://m.media-amazon.com/images/I/71RVzX9VjdL._AC_UF894,1000_QL80_.jpg"
              alt="Venom"
            />
          </A>
        </div>
      </div>
    </>
  );
}

export default CategoriaAccion;
