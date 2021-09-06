import { FaBars } from "react-icons/fa"
import {NavLink as Link } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
    background: #272729;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw;
    position: sticky;
    top: 1vw;
    border-radius: 2pt;
    z-index: 5;
    overflow: hidden;
`;

export const NavLogo = styled(Link)`
    color: #ffffff;
    font-size: 2vh;
    text-decoration: none;
`;

export const NavLink = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1vw;
    height: 100%;
    &.active {
        color:black;
    }
    &:hover {
        color: black;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #ffffff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: max(min(1.3vw, 16pt), 1.3vh);
        cursor: pointer;
    }
`;

export const NavMenu = styled.nav`
    display: flex;
    align-items: center;


    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;


    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: transparent;
    padding: 10px 22px;
    color: #ffffff;
    outline: none;
    border: 1px solid #ffffff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2 ease-in-out;
        background: #3d3d40;
        color: #808080;
    }
`;