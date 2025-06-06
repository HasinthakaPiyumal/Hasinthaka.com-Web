'use client';

import React, { Suspense, useEffect, useState, RefObject, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from '@/components/model';
import Robot from '@/components/Robot';
import { useControls } from "leva";
import James from '@/components/James';
import Robo from '@/components/Robo';
import GlowingFloor from '@/components/GlowingFloor';
const ModelViewer = ({ pageRef }: { pageRef: RefObject<HTMLDivElement> }) => {
    // const ModelViewer = () => {
    // const { position, rotation } = useControls("Camera", {
    //     position: { value: [0, 0, 1.2], step: 0.1 }, // Adjustable XYZ position
    //     rotation: { value: [-Math.PI / 2, 0, 0], step: 0.1 }, // Rotational angles
    // });

    const [previous, setPrevious] = useState(0);
    useEffect(() => {
        const handleScroll = (): void => {
            const currentPos = pageRef.current?.scrollTop || 0;
            const difference = currentPos - previous;


            setPrevious(currentPos);

            console.log("Difference:", difference);
            console.log("Current position:", currentPos);

        };

        const pageElement = pageRef.current;
        pageElement?.addEventListener("scroll", handleScroll);

        return () => {
            pageElement?.removeEventListener("scroll", handleScroll);
        };
    }, [previous]);
    const MyModel = useMemo(() => <Model pageRef={pageRef} scale={0.3} position={[0, -0.3, 0]} />, [])
    return (

        <Canvas className={`z-0 w-full pointer-events-none`} shadows camera={{ position: [0, 0, 1.2], fov: 45, }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <group position={[0, 0, 0]}>
                {MyModel}
                <Robo scale={0.05} position={[-0.2, -0.2 + previous / window.innerHeight, 0]} />
            </group>
            <Environment preset="night" />
        </Canvas>
    );
};

function LoadingSpinner() {
    return <mesh><sphereGeometry args={[1, 32, 32]} /><meshBasicMaterial color="#00000000" /></mesh>;
}

export default ModelViewer;
