'use client';

import React, { Suspense, useEffect, useState, RefObject, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useProgress, Html } from '@react-three/drei';
import Model from '@/components/model';
import Robo from '@/components/Robo';

const ModelViewer = ({ pageRef }: { pageRef: RefObject<HTMLDivElement> }) => {
    const [previous, setPrevious] = useState(0);
    const { active, progress } = useProgress(); // 👈 use globally to track loading

    // ✅ Call your function when loading completes
    useEffect(() => {
        if (!active) {
            console.log("All models loaded");
            // You can call any function here
        }
    }, [active]);

    // Scroll handler
    useEffect(() => {
        const handleScroll = (): void => {
            const currentPos = pageRef.current?.scrollTop || 0;
            const difference = currentPos - previous;
            setPrevious(currentPos);
        };

        const pageElement = pageRef.current;
        pageElement?.addEventListener("scroll", handleScroll);
        return () => pageElement?.removeEventListener("scroll", handleScroll);
    }, [previous]);

    const MyModel = useMemo(() => <Model pageRef={pageRef} scale={0.3} position={[0, -0.3, 0]} />, []);

    return (
        <Canvas className="z-0 w-full pointer-events-none" shadows camera={{ position: [0, 0, 1.2], fov: 45 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            {/* <Suspense fallback={<Loader />}> */}
            <group position={[0, 0, 0]}>
                {MyModel}
                <Robo scale={0.05} position={[-0.2, -0.2 + previous / window.innerHeight, 0]} />
            </group>
            <Environment preset="night" />
            {/* </Suspense> */}
        </Canvas>
    );
};

function Loader() {
    const { active, progress } = useProgress();
    return active ? (
        <Html center>
            <p>Loading {Math.floor(progress)}%</p>
        </Html>
    ) : null;
}

export default ModelViewer;
