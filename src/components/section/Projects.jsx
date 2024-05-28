import React from 'react';
import Tars from '../canvas/Tars';
import AvatarCanvas from "./AvatarCanvas";
import "./Ap.css"

const Projects = () => {
  return (
   <div class="zontainer">
      <Tars />
    <div class="zox zox1"><AvatarCanvas /></div>
    <div class="zox zox2">projects are loading</div>
  </div>
  )
}

export default Projects
