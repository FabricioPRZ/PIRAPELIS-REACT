import React from "react";

const Header = ({className, contenido}) =>{
    return(
        <header className={className}>{contenido}</header>
    );
}

export default Header;