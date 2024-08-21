import React, { useRef } from 'react';
import { useGLTF, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

// Styled component for canvas wrapper
const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

// Main Boy component
const Boy = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '70vh' }}>
      <Lvas />
    </div>
  );
};

// Canvas wrapper component
const Lvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Drag />
        <Environment preset='sunset' />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

// Component to drag and rotate the model
const Drag = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("./boy_character_-_cartoon.glb");

  // Apply rotation of 180 degrees (Math.PI radians) around the Y-axis
  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[0, -4, -1]}
      scale={4.0}
      rotation={[0,0, 0]} // Rotate 180 degrees around Y-axis
    />
  );
};

export default Boy;
