import React from "react"
import Icon from "../Icon/Icon"

const Input = ({className, contenido, id, type}) => {
    return(
    <>
    <input className={className} placeholder={contenido} id={id} type={type}/><Icon />
    </>
    );
}

export default Input;