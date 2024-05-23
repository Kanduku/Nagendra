import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Bird from "./Bird";
import { Environment } from '@react-three/drei';
import React from 'react'

const AvatarCanvas = () => {

  
  return (<Canvas>
 
  
    <ambientLight intensity={0.5}/>
    <pointLight position={[2,1,1]} />
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

  
   <Bird position={[1,0,0]}  scale={0.004}  />
   
   <Environment preset='sunset' />

  </Canvas>
   
  )
}

export default AvatarCanvas
