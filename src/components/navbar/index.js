import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

import LinkedIn from '../../images/LI-In-Bug.png'
import GitHub from '../../images/GitHub-Mark-Light-64px.png'

const Navbar = () => {

    const imgStyle = {
        width: "45%"
    }

    return (
        <>
            {/* <Nav>
                <NavLogo to=""> <img src={logo} alt="logo" style={{width: "4%"}}/> </NavLogo>
                <NavMenu>
                    <NavBtn> <a href="https://github.com/avasdowney" target = "_blank"> <img src={GitHub} alt="GitHub" style={imgStyle}/> </a> </NavBtn>
                    <NavBtn> <a href="https://www.linkedin.com/in/ava-downey-9b59931aa/" target="_blank"> <img src={LinkedIn} alt="LinkedIn" style={imgStyle}/> </a> </NavBtn>
                </NavMenu>
            </Nav> */}

            <Nav>
                <Bars />
        
                <NavMenu>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/education' activeStyle>
                    Education
                </NavLink>
                <NavLink to='/work-experience' activeStyle>
                    Work Experience
                </NavLink>
                <NavLink to='/other-experience' activeStyle>
                    Other Experience
                </NavLink>
                <NavLink to='/projects' activeStyle>
                    Projects
                </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtn> <a href="https://github.com/avasdowney" target = "_blank"> <img src={GitHub} alt="GitHub" style={imgStyle}/> </a> </NavBtn>
                    <NavBtn> <a href="https://www.linkedin.com/in/ava-downey-9b59931aa/" target="_blank"> <img src={LinkedIn} alt="LinkedIn" style={imgStyle}/> </a> </NavBtn>
                    <NavBtnLink to='/contact'>
                        Contact Me
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;