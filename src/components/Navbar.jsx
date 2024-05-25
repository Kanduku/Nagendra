import React from 'react';

import {Link } from "react-router-dom";
import'./../index.css';
import { Bio } from "../data/constants";
import { useState } from 'react';
import styled from "styled-components";



import MenuIcon from '@mui/icons-material/Menu';






const NavLogo = styled(Link)`
  padding:0 6px;
  text-decoration:none;
 font-weight:500;
 font-size:18px;
  width:80%; 
  color:white;
 text-decotation:none;
`;

const Nav = styled.div`
background-color:black;
width:100%;
height:60px;
  display: flex;
  align-items:center;
  justify-content:center;
  font-size:1rem;
  position:sticky;
  top:0;
  z-index:10;
  
`;

const NavbarContainer = styled.div`

max-width:1200px;
padding:0 14px;
width:100%;
  display: flex;
  align-items:center;
  justify-content:space-between;
  font-size:1rem;
  

`;
const NavItems = styled.ul`

width:100%;
align-items:center;
justify-content:center;
gap:32px;
display:flex;
padding: 0 6px;
list-style:none;
@media screen and (max-width:760px) {
  display:none;
}

`;
const NavLi = styled(Link)`
color:white;
text-decoration:none;
cursor:pointer;




&:focus {
  border: 1px solid pink;
  color:black;
  background:white;
  border-radius:30px;
  padding:9px 10px;

   align-items:center:
   justify-content:center;
}

@media screen and (max-width:760px) {
  &:focus {
  border: 1px solid pink;
  color:black;
  background:white;
  padding:5px 250px;
  
}
}


`;
const ButtonContainer =styled.div`
width:100%%;
height:100%;
display:flex;
justify-content:end;
align-items:center;
padding:0 6px;
@media screen and (max-width:760px) {
  display:none;
}
`;
const MobileIcon = styled.div`
color:white;
height:100%;
display:flex;
align-items:center;
display:none;
@media screen and (max-width: 768px){
  display:block;
}
`;

const GithubButton = styled.a`
text-decotation:none;
  border: 1px solid white;
  color:white;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 16px 20px;
  cursor: pointer;
  padding:  0px 20px;
  width:150px ;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border: 1px solid pink;
    color:black;
    background:white;
  }
`;

const MObileMenu = styled.ul`

width:100%;
align-items:center;
justify-content:center;
gap:16px;
display:flex;
flex-direction:column;
padding: 0 6px;
list-style:none;
padding:12px 40px 24px 40px;
background:grey;
  position :absolute;
  top:60px;
  right:0;
  transition : all 0.6s ease-in-out;

  border-radius:0 0 10px 0 rgba(0 ,0 ,0, 0.2);
  transform: ${({ isOpen }) => isOpen ? "translateY(0)" : "translateY(-100)"};
  opacity: ${({ isOpen }) => isOpen ? "100%" : "0"};
  z-index: ${({ isOpen }) => isOpen ? "1000" : "100"};


`;

const Navbar = () => {
  const [isOpen,setIsOpen] =useState(false);
  return (
    <Nav>
      <NavbarContainer>
       
        <NavLogo to="/" >Nagendra portfolio</NavLogo>

<MobileIcon onClick={() => setIsOpen(!isOpen)}>
  <MenuIcon  style={{color:"inherit"}}/>
</MobileIcon>

        <NavItems>
        <NavLi to="/"  >Home</NavLi>
        <NavLi to="/Skills" >Skills</NavLi>
   
   
        <NavLi to="/Projects">Projects</NavLi>
        <NavLi to="/Education">About</NavLi>
        <NavLi to="/Contact">Contact</NavLi>
        </NavItems>
        {isOpen && (
        <MObileMenu isOpen={isOpen} >
          <NavLi   to="/" onClick={() => setIsOpen(!isOpen)}  >Home</NavLi>
          <NavLi to="/Skills" onClick={() => setIsOpen(!isOpen)}  >Skills</NavLi>

          
          <NavLi to="/Projects" onClick={() => setIsOpen(!isOpen)} >Projects</NavLi>
          <NavLi  to="/Education" onClick={() => setIsOpen(!isOpen)} >About</NavLi>
          <NavLi to="/Contact" onClick={() => setIsOpen(!isOpen)} >Contact</NavLi>
        <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: "black",
                color: "white",
              }}
            >
              Github Profile
            </GithubButton>
       
        </MObileMenu>

        )
        }
             <ButtonContainer>
          <GithubButton href={Bio.github} target="_Blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>

       
         </NavbarContainer>
         </Nav>

  )
}

export default Navbar
