import React from "react";

const P = ({ className, id, contenido }) => {
    return (
        <p className={className} id={id}>{contenido}</p>
    );
}

export default P;
