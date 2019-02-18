import React from "react";

import { Zoom, Profile, Heart, Cart } from "./../../../Common/Icons";
import Burger from "./component/Burger";
import MenuBurger from "./component/Menuburger";

import Logo from "./../../../Common/Logo";
import style from "./Header.module.css";

const Header = () => {
    const inCart = 2;

    return (
        <header className={`overflow-hidden flex ${style.header}`}>
            <Zoom className={style.zoom} width={30} color="#fff" />
            <div className={`flex relative ${style.burgerWrapper}`}>
                <Burger className="fl" />
                <MenuBurger />
                <label className={`fl ${style.label}`}>Shop Category</label>
            </div>
            <div className={style.logoWrapper}>
                <Logo />
            </div>
            <ul className={`fr ${style.menuRight}`}>
                <li>
                    <a className={style.icon} href="/profile">
                        <Profile width={30} color="#fff" />
                    </a>
                </li>
                <li>
                    <a className={style.icon} href="/favorites">
                        <Heart width={30} color="#fff" />
                    </a>
                </li>
                <li>
                    <a className={`relative db ${style.icon}`} href="/cart">
                        {inCart > 0 && (
                            <div className={`absolute ${style.notifs}`}>
                                {inCart}
                            </div>
                        )}
                        <Cart width={30} color="#fff" />
                    </a>
                </li>
            </ul>
        </header>
    );
};
export default Header;

