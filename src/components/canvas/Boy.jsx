import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Boy = () => {
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
      <pointLight />

      <Drag />
    
      <Environment preset='sunset' />
    </Canvas>
  );
};

const Drag = () => {
  const modelRef = useRef();
  const avatar = useGLTF("./boy_character_-_cartoon.glb");
  const { camera } = useThree(); // Get the camera from the scene
  const [rotation, setRotation] = useState(0);

  // Calculate rotation based on the camera's position
  const calculateRotation = () => {
    const targetRotation = Math.atan2(
      camera.position.x - modelRef.current.position.x,
      camera.position.z - modelRef.current.position.z
    );
    return targetRotation;
  };

  // Function to rotate the model towards the camera
  const rotateModel = () => {
    const targetRotation = calculateRotation();
    const newRotation = rotation + 0.01; // Adjust the rotation speed here
    setRotation(newRotation);
    modelRef.current.rotation.y = newRotation;
  };

  // Call the rotateModel function on each frame
  useFrame(() => {
    rotateModel();
  });

  return <primitive ref={modelRef} object={avatar.scene} position={[0, -4, -4]} scale={4.0} />;
};

export default Boy;
