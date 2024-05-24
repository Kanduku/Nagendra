
import React, { useEffect, useRef } from 'react';
import {  useAnimations, useGLTF, useTexture } from '@react-three/drei';
import {  useThree } from '@react-three/fiber';



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
 
export default Drago;
