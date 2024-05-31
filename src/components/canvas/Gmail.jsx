import React, { useRef } from 'react';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

const StyledCanvasWrapper =styled.div`
width:100%;
height:auto;
position:absolute;
inset:0;
`;

const Gmail = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Lvas />
    </div>
  );
};

const Lvas = () => {
  return (<StyledCanvasWrapper>
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight  />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <Drag />
      <Environment preset='sunset' />
    </Canvas>
    </StyledCanvasWrapper>
  );
};

const Drag = () => {
  const modelRef = useRef();
  const avatar = useGLTF("./Gmail.glb");

  return <primitive ref={modelRef} object={avatar.scene} position={[0, 1, -4]} scale={6.0} />;
};

export default Gmail;
