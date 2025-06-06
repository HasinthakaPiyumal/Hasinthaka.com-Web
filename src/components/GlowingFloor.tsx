import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
interface ModelProps {
    scale?: number | [number, number, number];
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const GlowingFloor = (props: ModelProps) => {
    const planeRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        // Optional: Create a pulsating glow effect by changing opacity over time
        if (planeRef.current) {
            (planeRef.current.material as THREE.MeshStandardMaterial).opacity = 0.1 + 0.005 * Math.sin(clock.getElapsedTime());
        }
    });

    return (
        <mesh ref={planeRef} {...props} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <circleGeometry args={[2, 64]} />
            <meshStandardMaterial
                color="#1E90FF"
                transparent={true}
                opacity={0.1}
                roughness={0.5}
                emissive="#1E90FF"
                emissiveIntensity={0.1}
            />
        </mesh>
    );
};

export default GlowingFloor;
