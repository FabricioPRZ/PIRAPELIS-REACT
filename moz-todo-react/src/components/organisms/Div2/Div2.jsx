import React from "react";
import H3 from '../../atoms/H3/H3';
import Image from "../../atoms/Image/Image";
import P from "../../atoms/P/P";

const Div2 = () => {
    return (
        <>
            <H3 contenido="Película Más Popular Elegida Por Usuarios" />
            <div className="parrafo">
                <div className="clearfix">
                    <div className="div2">
                        <Image className="img2" src="https://m.media-amazon.com/images/I/71HQiOZsZ6L._AC_UF894,1000_QL80_.jpg" alt="Sherk2Poster" />
                        <P contenido="Shrek 2 ha sido la elegida como la película más popular por nuestros usuarios. Esta película ha logrado encantar a muchos de nuestros seguidores, por lo cual ahora fue elegida como la más popular. En esta película, Shrek nos enseña que conocer a nuestros suegros puede ser un horror, sin embargo, él logra ganárselos de alguna manera para así obtener la bendición de los suegros (aunque él no la necesitaba). Es por esto, por lo genial e increíble de esta película, que fue elegida como la más popular de esta semana." />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Div2;