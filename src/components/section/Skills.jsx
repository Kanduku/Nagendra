
import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSkills from "./DesktopSkills";
import MobileSkills from "./MobileSkills";

const Skills = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 960px)" });

  return <>{isTabletOrMobile ? <MobileSkills /> : <DesktopSkills />}</>;
};

export default Skills;