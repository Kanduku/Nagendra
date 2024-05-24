import React, { useEffect, useRef } from 'react';

import { OrbitControls, useAnimations, useGLTF, useTexture } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import Dragon from "./Drago";



const AvatarCanvas = () => {
  return (
    <Canvas>
      
    <ambientLight intensity={0.5}/>
    <pointLight position={[2,1,1]} />
    <OrbitControls
    enableZoom={false}
    enablePan={false}
    enableRotate={true}
  />

  
   <Dragon position={[0,0,0]}   />
   
   <Environment preset='sunset' />
     
    </Canvas>
  );
};


export default AvatarCanvas;
