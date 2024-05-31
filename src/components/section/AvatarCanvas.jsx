
import { OrbitControls, Environment  } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import {  useAnimations, useGLTF, useTexture } from '@react-three/drei';
import {  useThree } from '@react-three/fiber';
import styled from 'styled-components';

const StyledCanvasWrapper =styled.div`

height:auto;
position:absolute;
inset:0;
`;


const AvatarCanvas = () => {
  return (<StyledCanvasWrapper >
    <Canvas>
      
    <ambientLight intensity={0.5}/>
    <pointLight position={[2,1,1]} />
    <OrbitControls
    enableZoom={false}
    enablePan={false}
    enableRotate={false}
  />

  
   <Drago   />
   
   <Environment preset='sunset' />
     
    </Canvas>
    </StyledCanvasWrapper>
  );
};


export default AvatarCanvas;



const Drago = () => {
    const { camera } = useThree();
    camera.position.set(-2, 0.6, 3);
    const modelRef = useRef();
    const avatar = useGLTF("./red_dragonn.glb");
    const texture = useTexture("./heloa.jpg"); // Load texture image
    const { actions } = useAnimations(avatar.animations, modelRef);
  
    useEffect(() => {
      avatar.scene.traverse((object) => {
        if (object.isMesh) {
          object.material.map = texture; // Apply texture image
          object.material.needsUpdate = true;
        }
      });
      actions.fly.play();
    }, [avatar, actions, texture]);
  
    return <primitive ref={modelRef} object={avatar.scene}  args={[1,1,1]} scale={0.03} />;
  };
 

