// src/components/ModelViewer.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

type ModelProps = {
  modelPath: string;
};

const ModelViewer: React.FC<ModelProps> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <Canvas className="h-64 w-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive object={scene} scale={1} />
      <OrbitControls />
    </Canvas>
  );
};

// Preload models to avoid loading delays
useGLTF.preload('/public/models/curso-example.glb');
useGLTF.preload('/public/models/hero-model.glb');

export default ModelViewer;
