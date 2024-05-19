
import React , {Suspense, useRef,useState }from 'react';
import {Canvas, useFrame } from "@react-three/fiber";


import { Points,PointMaterial,Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper =styled.div`
width:100%;
height:auto;
position:absolute;
inset:0;
`;

const Tars = () => {
  return (
    <StyledCanvasWrapper>
    <Canvas camera={{position: [0,0,1]}}>
        <Suspense  fallback={null}>
            <Sstars />
        </Suspense>
        <Preload all />
    </Canvas>
</StyledCanvasWrapper>
  )
}


const Sstars = (props) => {

    const ref= useRef();
    const [sphere]=useState(() => 
    random.inSphere(new Float32Array(5000), {radius:1.2})  );
    useFrame((state,delta) =>{
        ref.current.rotation.x -=delta/10;
        ref.current.rotation.y -=delta/15;
    });
  return (
   <group roatation={[0,0,Math.Pi /4]}>
    <Points 
    ref={ref}
    positions={sphere}
    strid={3}
    frustumCulled
    {...props}
    >
        <PointMaterial
        transparent
        color="#f272c8"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
       

         />

    </Points>
   </group>
  )
}

export default Tars
