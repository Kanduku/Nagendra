import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import './../index.css';
import { Bio } from "../data/constants";

const Nav = styled.div`
  background-color: black;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 0; /* Ensure no extra space at the bottom */
`;

const NavbarContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0; /* Remove any padding that might cause extra space */
`;

const NavLogo = styled(Link)`
  padding: 0 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: white;
  width: 80%;
`;

const NavItems = styled.ul`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 32px;
  display: flex;
  list-style: none;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const NavLi = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    border: 1px solid pink;
    color: black;
    background: white;
    border-radius: 30px;
    padding: 9px 10px;
  }

  @media screen and (max-width: 760px) {
    &:focus {
      padding: 5px 250px;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;
  margin: 0; /* Ensure no extra margin that might cause space */

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  color: white;
  height: 100%;
  display: none;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const BaseButton = styled.a`
  text-decoration: none;
  border: 1px solid white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px 20px;
  cursor: pointer;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;

  &:hover {
    border: 1px solid pink;
    color: black;
    background: white;
  }
`;

const GithubButton = styled(BaseButton)`
  width: 150px;
`;

const MobileMenu = styled.ul`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
  display: flex;
  flex-direction: column;
  list-style: none;
  background: grey;
  position: absolute;
  top: 60px;
  right: 0;
  transition: all 0.6s ease-in-out;
  border-radius: 0 0 10px 0;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "100")};
  padding: 12px 40px 24px 40px;
  margin: 0; /* Remove default margin */
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Nagendra Portfolio</NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLi to="/Skills">Skills</NavLi>
          <NavLi to="/Projects">Projects</NavLi>
          <NavLi to="/Education">About</NavLi>
          <NavLi to="/Contact">Contact</NavLi>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLi to="/" onClick={() => setIsOpen(!isOpen)}>Home</NavLi>
            <NavLi to="/Skills" onClick={() => setIsOpen(!isOpen)}>Skills</NavLi>
            <NavLi to="/Projects" onClick={() => setIsOpen(!isOpen)}>Projects</NavLi>
            <NavLi to="/Education" onClick={() => setIsOpen(!isOpen)}>About</NavLi>
            <NavLi to="/Contact" onClick={() => setIsOpen(!isOpen)}>Contact</NavLi>
            <GithubButton href={Bio.github} target="_blank">
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
