import React from 'react';
import styled from "styled-components";
import { Bio } from "./../../data/constants";
import Typewriter from "typewriter-effect";
import { Tilt } from  "react-tilt";
import { motion } from "framer-motion";
import { headTextAnimation , headContainerAnimation , headContentAnimation } from '../../utils/motion';
import HeroImage from "./../../images/HeroImage.png";

import Tars  from "./../canvas/Tars";

const HeroContainer =styled.div`
display:flex;
justify-content:center;

position:relative;
padding:80px 30px ;
z-index:1;
@media (max-width:960px){
    padding:66px 16px;
}
@media (max-width:640px){
    padding:32px 16px;
}
clip-path:polygon(0 0,100% 0, 100% 100%, 70% 95%, 0 100%, 0 0);
`;

const HeroInnerContainer =styled.div`
display:flex;
justify-content:space-between;
align-items:center;
position:relative;
width:100%;
max-width:1100px;
@media (max-width:960px){
    flex-direction:column;
}
`;

const HeroLeftContainer =styled.div`
width:100%;
order:1;
gap:6px;
justify-content:start;
@media (max-width:960px){
    order:2;
    margin-bottom:80px;
    display:flex;
    flex-direction:column;
    align-items:center;

    
    
}

`;

const HeroRightContainer =styled.div`
width:100%;
order:2;

align-items:end;
@media (max-width:960px){
    flex-direction:column;
    order:1;
  
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:30px;
}
@media (max-width:640px){
    margin-bottom:30px;
}
`;
const Title = styled.div`
font-weight:700;
font-size:50px;
margin-bottom:18px;
color:${({ theme }) => theme.text_primary};
line-height:68px;
@media (max-width:960px){
    text-align:center;
    font-size:30px;
    line-height:38px;
   
    font-weight:500;
}
`;

const TextLoop = styled.div`
font-weight:600;
font-size:30px;
gap:12px;
color:${({ theme }) => theme.text_primary};
line-height:48px;
display:flex;
@media (max-width:960px){
    align-self: start;
    padding: 0  ;
    text-align:center;
    align-items:center;
    justify-content:start;
    font-size:22px;
    line-height:38px;
  
    margin-bottom:16px;}

    `;

const Span = styled.span`
    cursor:pointer;
    color:#ff00ff;
   


    `;
const SubTitle = styled.div`
font-weight:400;
font-size:20px;
color:gray;
line-height:32px;
margin-bottom:42px;
@media (max-width:960px){
font-size:16px;
line-height:32px;
text-align:center;
    
    
}
`;
const ResumeButtom = styled.div`
background-color:red;
-webkit-appearance:button;
-moz-appearance:button;
appearance:button;
text-decoration:none;
width:95%;
max-width:200px;
align-items:center;
text-align: center;
padding:16px 0;
font-family: sans-serif;
box-sizing: border-box;
background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
background-size: 400%;
border-radius: 30px;
z-index: 1;
 
`;
const Img =styled.img`
border-radius:48%;

width:90%;
height:90%;
max-width:400px;
max-height:400px;
border: 3px solid pink;
@media (max-width:640px){
    max-width:300px;
    max-height:300px;

    margin: 0;
} 
@media (min-width:1140px){
    margin:0 0 0 150px;
} 
`;




const Hero = () => {
  return (
    <div  >
    <HeroContainer>
       <Tars />
   
        <motion.div { ...headContainerAnimation}>
        <HeroInnerContainer>
            <HeroLeftContainer>
            <motion.div {...headTextAnimation}>
                <Title>Hi  I'am <br/> {Bio.name}
                </Title>
                
                <TextLoop>I am a<Span><Typewriter options={{
                            strings: Bio.roles,
                            autoStart:true,
                            loop:true,
                        }}/></Span>
                </TextLoop>
                </motion.div>
                <motion.div {...headContentAnimation}>
                <SubTitle> {Bio.description}</SubTitle></motion.div>
                <ResumeButtom>check resume</ResumeButtom>
            </HeroLeftContainer>
            <HeroRightContainer>
                <motion.div {...headContentAnimation}>
                <Tilt>
                <Img src={HeroImage} alt="nagendra" />
                </Tilt>
                </motion.div>
            </HeroRightContainer>
        </HeroInnerContainer>
        </motion.div>
       
    </HeroContainer>
    </div>
  )
}

export default Hero
