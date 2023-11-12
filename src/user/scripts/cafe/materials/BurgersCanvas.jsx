import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../../../../Loader";



function Burgers() {
  const burger = useGLTF("./models/burger/scene.gltf");


  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="white" />
      <pointLight intensity={1} />
      <primitive 
        object={burger.scene}
      />
    </mesh>
  )
}

const BurgersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position : [10, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={false}
        />
        <Burgers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default BurgersCanvas;