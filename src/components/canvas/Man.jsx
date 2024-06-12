import React, { useRef} from 'react';
import { useGLTF, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import styled from 'styled-components';
import { useEffect } from 'react';
import { useAnimations } from '@react-three/drei';

const StyledCanvasWrapper =styled.div`
width:100%;
height:auto;
position:absolute;
inset:0;
`;


const Man = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Lvas />
    </div>
  );
};

const Lvas = () => {
  return (<StyledCanvasWrapper >
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight  />
      <Drag />
      <Environment preset='sunset' />
    </Canvas>
    </StyledCanvasWrapper>
  );
};

const Drag = () => {
  const modelRef = useRef();
  const avatar = useGLTF("./texting.glb");
// Get the camera from the scene


  const { actions } = useAnimations(avatar.animations, modelRef);
  useEffect(() => {
    actions.text.play();
  }, [actions]);

  return (
    <primitive ref={modelRef} object={avatar.scene} position={[0, -4, -4]} scale={4.0} />
  );
};

export default Man;
