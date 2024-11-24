

import React from "react";
import styled, { keyframes } from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Tars from "../canvas/Tars";

// Container for the entire layout
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 600px; // Adjust height as needed
  width: 100%;
  
`;

// Title at the center
const CenterTitle = styled.div`
  font-size: 52px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  position: absolute;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

// Define the circular path animation
const moveInCircle = keyframes`

  0%   { transform: rotate(0deg) translateX(200px) translateY(100px) rotate(0deg);  opacity: 1;}
  10%  { transform: rotate(36deg) translateX(120px) translateY(120px) rotate(-36deg); opacity: 1;}
  20%  { transform: rotate(72deg) translateX(120px) translateY(140px) rotate(-72deg); opacity: 1;}
  30%  { transform: rotate(108deg) translateX(250px) translateY(160px) rotate(-108deg); opacity: 1; }
  40%  { transform: rotate(144deg) translateX(350px) translateY(180px) rotate(-144deg); opacity: 1;}
  50%  { transform: rotate(180deg) translateX(300px) translateY(200px) rotate(-180deg); opacity: 1;}
  60%  { transform: rotate(216deg) translateX(300px) translateY(180px) rotate(-216deg); opacity: 1;}
  70%  { transform: rotate(252deg) translateX(220px) translateY(160px) rotate(-252deg); opacity: 1;}
  80%  { transform: rotate(288deg) translateX(220px) translateY(140px) rotate(-288deg); opacity: 1;}
  90%  { transform: rotate(324deg) translateX(280px) translateY(120px) rotate(-324deg); opacity: 1;}
  100% { transform: rotate(360deg) translateX(300px) translateY(100px) rotate(-360deg); opacity: 1;}
`;

const SkillCardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  animation: ${moveInCircle} 30s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;
`;


// Styling for individual skill cards
const Skill = styled.div`
  max-height: 350px;
  width: 200px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
 
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary + 80};
  display: flex;
  align-items: center;
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const DesktopSkills = () => {
  const delayIncrement = 6; // Fixed delay of 0.3 seconds between cards

  return (
    <Container>
      <Tars />
      <CenterTitle> <DotLottieReact
      src="https://lottie.host/c2b4f2e7-ab33-4982-9e89-aa12ecb40739/DuIgEXEHP4.lottie"
      loop
      autoplay
    /></CenterTitle>
      {skills.map((skill, index) => (
        <SkillCardWrapper
          key={`skill-${index}`}
          delay={index * delayIncrement}
        >
          <Tilt>
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index_x) => (
                  <SkillItem key={`skill-item-${index_x}`}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          </Tilt>
        </SkillCardWrapper>
      ))}
    </Container>
  );
};
export default DesktopSkills;

