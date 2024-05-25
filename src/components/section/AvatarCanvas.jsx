import React from 'react';
import { OrbitControls, Environment  } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Dragon from "./Drago";



const AvatarCanvas = () => {
  return (
    <Canvas>
      
    <ambientLight intensity={0.5}/>
    <pointLight position={[2,1,1]} />
    <OrbitControls
    enableZoom={false}
    enablePan={false}
    enableRotate={false}
  />

  
   <Dragon   />
   
   <Environment preset='sunset' />
     
    </Canvas>
  );
};


export default AvatarCanvas;
