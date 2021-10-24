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
import GitHub from '../../images/LI-In-Bug.png'
import LinkedIn from '../../images/GitHub-Mark-Light-64px.png'

const Navbar = () => {

    const imgStyle = {
        width: "2%"
    }

    return (
        <>
            <Nav>
                <NavLogo to=""> <img src={logo} alt="logo" style={{width: "4%"}}/> </NavLogo>
                <NavMenu>
                    <NavBtn> <a href="https://github.com/avasdowney" target = "_blank"> <img src={GitHub} alt="GitHub" style={imgStyle}/> </a> </NavBtn>
                    <NavBtn> <a href="https://www.linkedin.com/in/ava-downey-9b59931aa/" target="_blank"> <img src={LinkedIn} alt="LinkedIn" style={imgStyle}/> </a> </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;