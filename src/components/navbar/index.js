import React from 'react'
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

import "../../css/styles.css"

import LinkedIn from '../../images/LI-In-Bug.png'
import GitHub from '../../images/GitHub-Mark-Light-64px.png'

const Navbar = () => {

    return (
        <>
            <Nav>
                <NavMenu>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/resume' activeStyle>
                    Resume
                </NavLink>
                <NavLink to='/projects' activeStyle>
                    Projects
                </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtn> <a href="https://github.com/avasdowney" target = "_blank" rel="noreferrer"> <img src={GitHub} alt="GitHub" class="navImage"/> </a> </NavBtn>
                    <NavBtn> <a href="https://www.linkedin.com/in/ava-downey-9b59931aa/" target="_blank" rel="noreferrer"> <img src={LinkedIn} alt="LinkedIn" class="navImage"/> </a> </NavBtn>
                    <NavBtnLink to='/contact'>
                        Contact Me
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;