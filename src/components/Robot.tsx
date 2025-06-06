import { useGLTF } from '@react-three/drei';
import React from 'react'
import { Mesh } from 'three';

interface ModelProps {
    scale?: number | [number, number, number];
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const Robot = (props: ModelProps) => {
    const { nodes, materials } = useGLTF('/MyRobot.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Cube as Mesh).geometry}
                material={materials['Material.002']}
                position={[-0.012, 3.368, -0.045]}
                scale={[1.414, 1, 1]}
            />
            <group position={[-0.012, 3.368, -0.045]} scale={[1.414, 1, 1]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Cube003 as Mesh).geometry}
                    material={materials['Material.005']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Cube003_1 as Mesh).geometry}
                    material={materials['Material.006']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Cylinder as Mesh).geometry}
                material={materials['Material.003']}
                position={[0.232, 3.4, 0.089]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={[-0.423, -0.146, -0.423]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Cube002 as Mesh).geometry}
                material={materials['Material.001']}
                position={[-0.023, 1.066, -0.074]}
                scale={[1.648, 1.052, 1.461]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Cylinder001 as Mesh).geometry}
                material={materials['Material.004']}
                position={[-0.033, 2.223, -0.039]}
                scale={-0.298}
            />
        </group>
    )
}

useGLTF.preload('/MyRobot.glb')

export default Robot