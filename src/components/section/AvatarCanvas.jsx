// AvatarCanvas.js
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import { useAnimations } from '@react-three/drei';
import { useGLTF, OrbitControls, Environment, useTexture } from '@react-three/drei';

const AvatarCanvas = ({ scrollY, direction }) => {
  const [position, setPosition] = useState(0);

  // Update the position based on scroll
  useEffect(() => {
    const updatePosition = () => {
      const scrollPosition = scrollY / window.innerHeight;
      setPosition(scrollPosition);
    };
    updatePosition();
    window.addEventListener('scroll', updatePosition);
    return () => window.removeEventListener('scroll', updatePosition);
  }, [scrollY]);

  return (
    <Canvas style={{ height: '100vh', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 1, 1]} />
      <Avatar direction={direction} scrollPosition={position} />
      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

const Avatar = ({ direction, scrollPosition }) => {
  const modelRef = useRef();
  const { camera } = useThree();
  const avatar = useGLTF('./red_dragonn.glb');
  const texture = useTexture('./heloa.jpg');
  const { actions } = useAnimations(avatar.animations, modelRef);

  useEffect(() => {
    avatar.scene.traverse((object) => {
      if (object.isMesh) {
        object.material.map = texture;
        object.material.needsUpdate = true;
      }
    });
    if (actions && actions.fly) {
      actions.fly.play();
    }
    camera.position.set(direction === 'left' ? 2 : -2, 0.6, 3);
  }, [avatar, actions, texture, direction, camera]);

  useFrame(() => {
    if (modelRef.current) {
      // Smoothly move the avatar based on scroll position
      modelRef.current.position.x = direction === 'left' ? -scrollPosition * 2 : scrollPosition * 2;
    }
  });

  return <primitive ref={modelRef} object={avatar.scene} scale={0.03} />;
};

export default AvatarCanvas;
