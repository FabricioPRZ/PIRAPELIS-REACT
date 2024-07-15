import React from "react"

const Button = ({className, nombre}) => {
return(
    <button className={className}>{nombre}</button>
);
}

export default Button;