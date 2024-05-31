import React, { useRef, useState } from 'react';
import { useGLTF, Environment } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';

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
      <Drag />
      <Environment preset='sunset' />
    </Canvas>
  );
};

const Drag = () => {
  const modelRef = useRef();
  const avatar = useGLTF("./Lwe.glb");
  const [rotation, setRotation] = useState(0);
  const { camera } = useThree(); // Get the camera from the scene

  // Function to calculate the rotation based on the camera's position
  const calculateRotation = () => {
    const targetRotation = Math.atan2(
      camera.position.x - modelRef.current.position.x,
      camera.position.z - modelRef.current.position.z
    );
    return targetRotation;
  };

  // Function to rotate the model
  const rotateModel = () => {
    const targetRotation = calculateRotation();
    const newRotation = rotation + 0.01; // Adjust the speed of rotation here
    setRotation(newRotation);
    modelRef.current.rotation.y = newRotation;
  };

  // Call the rotateModel function on each frame
  useFrame(() => {
    rotateModel();
  });

  return (
    <primitive ref={modelRef} object={avatar.scene} position={[0, -4, -4]} scale={4.0} rotation={[0, rotation, 0]} />
  );
};

export default Man;
