import React from "react";
import Ul from '../../atoms/Ul/Ul';
import Li from '../../atoms/Li/Li';
import A from '../../atoms/A/A';
import './Menu.css';
import Input from '../../atoms/Input/Input';
import Icon from "../../atoms/Icon/Icon";

const Menu = () => {
    return (
        <div className={"sticky"}>
            TU PÁGINA PIRATA FAVORITA Y CONFIABLE
            <div className="search-container">
                <Input type="text" id="searchInput" contenido={"Buscar..."} className={"search-bar"}/>
                <Icon className={"fas fa-search search-icon"}/>
            </div>
            <div className="menu">
                <Ul>
                    <Li contenido={<A direccion='/' children={'Home'} />} />
                    <Li contenido={<A direccion='/accion' children={'Categorias'} />} />
                    <Ul className={'dropdown'}>
                        <Li contenido={<A direccion='#' children={'Acción'} />} />
                        <Li contenido={<A direccion='#' children={'Infantil'} />} />
                        <Li contenido={<A direccion='#' children={'Animadas'} />} />
                    </Ul>
                </Ul>
            </div>
        </div>
    );
}

export default Menu;