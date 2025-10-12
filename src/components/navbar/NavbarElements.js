import {NavLink as Link } from "react-router-dom"
import styled from "styled-components"

// come back to padding
export const Nav = styled.nav`
    background: #101010;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem / 2);
    z-index: 12;
    position: sticky;
    top: 0;
`;

// active currently does nothing
export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1vw;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #ffffff;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -1vw;
    /* Second Nav */
    /* margin-right: 1vw; */
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 1vw;
    margin-left: 1vw;
    /* Third Nav */
    /* justify-content: flex-end;
    width: 100vw; */
`;

export const NavBtnLink = styled(Link)`
    border-radius: 2px;
    background: #808080;
    padding: .5vw .25vw;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 1vw;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;