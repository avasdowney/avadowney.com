import React from 'react'
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements'
import headshot from '../../images/ava_face.png'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/home"> <img src={headshot} alt="logo" style={{width: "5%"}}/> </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink to="/home" activeStyle> Home </NavLink>
                    <NavLink to="/resume" activeStyle> Resume </NavLink>
                    <NavBtn> <NavBtnLink to="/contact"> Contact Me </NavBtnLink> </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;