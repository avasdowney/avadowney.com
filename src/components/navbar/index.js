import React from 'react'
import {
    Nav,
    NavLogo,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements'
import logo from '../../images/ava_temp_logo.PNG'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to=""> <img src={logo} alt="logo" style={{width: "4%"}}/> </NavLogo>
                <NavMenu>
                    <NavBtn> <a href="https://github.com/avasdowney" target = "_blank"> GitHub </a> </NavBtn>
                    <NavBtn> <a href="https://www.linkedin.com/in/ava-downey-9b59931aa/" target="_blank"> LinkedIn </a> </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;