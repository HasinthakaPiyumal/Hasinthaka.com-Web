'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from '@/components/model';

const ModelViewer = () => {
    return (
        <Canvas camera={{ position: [0, 0, 1], fov: 50 }}>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}s

            <Model scale={0.3} position={[0, -0.3, 0]} />
            <OrbitControls autoRotate={false} />
            <Environment preset="city" />
        </Canvas>
    );
};

export default ModelViewer;
