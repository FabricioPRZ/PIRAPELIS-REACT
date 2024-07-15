import React from "react";

const A = ({ className, direccion, children }) => {
    return (
        <a className={className} href={direccion}>
            {children}
        </a>
    );
}

export default A;
