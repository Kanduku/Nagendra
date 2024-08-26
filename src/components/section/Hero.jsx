import React from 'react';
import './Hero.css';
import { Bio } from "./../../data/constants";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { headTextAnimation, headContainerAnimation, headContentAnimation } from '../../utils/motion';
import Tars from "./../canvas/Tars";
import Man from '../canvas/Man';








const Hero = () => {

    return (
             <div className="container">
   
        <div className="box box2"><Lhio /></div>
        <div className="box box1"> <Man /></div>
      
      
   
  
  
   
      
    </div>
    )
  }
const Lhio = () => {
  return (
    <div className="hero-container">
      <Tars />
      <motion.div {...headContainerAnimation}>
       
            <motion.div {...headTextAnimation}>
              <div className="title">
                Hi I'm <br /> {Bio.name}
              </div>
              <div className="text-loop">
                I am a <span className="span">
                  <Typewriter options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }} />
                </span>
              </div>
            </motion.div>
            <motion.div {...headContentAnimation}>
              <div className="sub-title">{Bio.description}</div>
            </motion.div>
         
      </motion.div>
     
    </div>
  );
}

export default Hero;
