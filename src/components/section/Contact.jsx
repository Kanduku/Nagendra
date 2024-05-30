import React from 'react';
import Tars from '../canvas/Tars';

import "./Ap.css"
import Email from './Email';
import Gmail from '../canvas/Gmail';
const Contact = () => {
  return (
   <div class="zontainer">
      <Tars />
    <div class="zox zox1"><Gmail /></div>
    
    <div class="zox zox2 side "><Email /></div>
  </div>
  )
}

export default Contact;
