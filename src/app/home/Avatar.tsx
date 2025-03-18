import Model from '@/components/model';
import { Bounds, OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { useControls } from 'leva';

const CameraSetup = () => {
    const { camera } = useThree();

    useEffect(() => {
        camera.position.set(0, 0, 0);
        // camera.lookAt(0.89 / 2, 0.18 / 2, 0.94 / 2);
    }, [camera]);


    useEffect(() => {
        console.log("Camera Position:", camera.position);
    }, [camera.position]);

    return null;
};

const AvatarScene = () => {
    const { camera } = useThree();

    const { x, y, z } = useControls({
        x: { value: 0, min: -10, max: 10, step: 0.1 },
        y: { value: 0, min: -10, max: 10, step: 0.1 },
        z: { value: 0, min: -10, max: 10, step: 0.1 },
    });

    useEffect(() => {
        camera.position.set(x, y, z);
    }, [camera, x, y, z]);


    useEffect(() => {
        console.log("Camera Position:", camera.position);
    }, [camera.position]);
    return (
        <>
            <directionalLight position={[0, 0, 10]} />
            <ambientLight intensity={1} />
            <OrbitControls />
            {/* <CameraSetup /> */}
            <Model scale={0.5} />
        </>
    );
};

const Avatar = () => {
    return (
        <Canvas>
            <AvatarScene />
            {/* <Model /> */}
            {/* <Bounds fit clip observe>
                <Model scale={[0.5, 0.5, 0.5]} />
            </Bounds>
            <OrbitControls />
            <directionalLight position={[0, 0, 10]} />
            <ambientLight intensity={1} /> */}
        </Canvas>
    );
};

export default Avatar;
