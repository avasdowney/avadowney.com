import { FaBars } from "react-icons/fa"
import {NavLink as Link } from "react-router-dom"
import styled from "styled-components"

// come back to padding
export const Nav = styled.nav`
    background: #101010;
    display: block;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    position: sticky;
    top: 1vh;
    border-radius: 2pt;
    z-index: 5;
`;

export const NavLogo = styled(Link)`
    color: #ffffff;
    font-size: 2vh;
    text-decoration: none;
`;

// active currently does nothing
export const NavLink = styled(Link)`
    color: #ffffff;
    align-items: center;
    text-decoration: none;
    &.active {
        color:black;
    }
    &:hover {
        color: black;
    }
`;

export const NavMenu = styled.nav`
    display: inline;
    align-items: center;
`;

export const NavBtn = styled.nav`
    display: inline;
    align-items: center;
    border-radius: 2px;
    background: transparent;
    padding: .3vh .5vh;
    color: #ffffff;
    font-size: 2vw;
    border: 0.5px solid #ffffff;
    cursor: pointer;
    transition: all .3s ease-in-out;
    margin-left: 2vw;
    &:hover {
        transition: all 0.2 ease-in-out;
        background: #303030;
        color: #ffffff;
    }
`;

export const NavBtnLink = styled(Link)`
    text-decoration: none;
`;