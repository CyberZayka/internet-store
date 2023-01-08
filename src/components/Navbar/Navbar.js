import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    return (
        <nav className="header-nav">
            <ul className="header-nav__list">
                <li className="header-nav__item">
                    <NavLink exact to = "/" className="header-nav__link" activeClassName="header-nav__link--active">Каталог</NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink exact to = "/favorites" className="header-nav__link" activeClassName="header-nav__link--active">Избранное</NavLink>
                </li>
                <li className="header-nav__item">
                    <NavLink exact to = "/cart" className="header-nav__link" activeClassName="header-nav__link--active">Корзина</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;