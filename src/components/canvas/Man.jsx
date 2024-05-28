import React, { useRef } from 'react';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Man = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Lvas />
    </div>
  );
};

const Lvas = () => {
  return (
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
  );
};

const Drag = () => {
  const modelRef = useRef();
  const avatar = useGLTF("./Lwe.glb");

  return <primitive ref={modelRef} object={avatar.scene} position={[0, -3, -4]} scale={4.0} />;
};

export default Man;
