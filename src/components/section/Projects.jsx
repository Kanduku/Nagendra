import React from 'react';
import Tars from '../canvas/Tars';
import AvatarCanvas from "./AvatarCanvas";
import "./../../Ap.css"

const Projects = () => {
  return (
   <div class="container">
      <Tars />
    <div class="box box1"><AvatarCanvas /></div>
    <div class="box box2">projects are loading</div>
  </div>
  )
}

export default Projects
