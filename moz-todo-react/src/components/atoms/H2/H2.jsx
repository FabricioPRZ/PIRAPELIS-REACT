import React from "react";

const H2 = ({ className, id, contenido }) => {
    return (
        <h2 className={className} id={id}>{contenido}</h2>
    );
}

export default H2;
