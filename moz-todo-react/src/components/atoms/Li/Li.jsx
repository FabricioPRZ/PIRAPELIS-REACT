import React from "react";

const Li = ({ className, contenido }) => {
    return (
        <li className={className}>
            {contenido}
        </li>
    );
}

export default Li;
