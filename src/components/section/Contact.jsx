import React from 'react';
import Tars from '../canvas/Tars';
import AvatarCanvas from "./AvatarCanvas";
import "./../../Ap.css"
import Email from './Email';

const Contact = () => {
  return (
   <div class="container">
      <Tars />
    <div class="box box1"><AvatarCanvas /></div>
    <div class="box box2"><Email /></div>
  </div>
  )
}

export default Contact;
