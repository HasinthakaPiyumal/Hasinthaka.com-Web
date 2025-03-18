'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Html, useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { AnimationAction, AnimationClip, Box3, BoxHelper, Group, Vector3 } from 'three'
import { useFrame, useGraph } from '@react-three/fiber'
import { SkeletonUtils } from 'three-stdlib'
const file = '/Hasinthaka_v1.13(with wave animation).glb'
const Model = (props: any) => {
    const group = useRef<Group>(null)
    const { scene } = useGLTF(file)
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])

    const { nodes, materials } = useGraph(clone)
    // console.log(animations)
    const { animations: wavingAnimation } = useFBX('/Waving.fbx')
    const { animations: HipPopDanceAnimation } = useFBX('/Hip Hop Dancing.fbx')

    wavingAnimation[0].name = "waving"
    HipPopDanceAnimation[0].name = "hip-pop-dance"
    const [animation, setAnimation] = useState<string>('hip-pop-dance')

    const { actions } = useAnimations([wavingAnimation[0], HipPopDanceAnimation[0]], group)
    useEffect(() => {
        console.log('Setting animation')
        const action = actions[animation]
        if (action) {
            action.reset().fadeIn(0.5).play()
            return () => {
                action.fadeOut(0.5)
            }
        }
    }, [animation, actions])

    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
        depth: 0,
    });



    useEffect(() => {
        if (group.current) {
            const box = new Box3().setFromObject(group.current);
            const size = new Vector3();
            box.getSize(size);

            setDimensions({
                width: size.x,
                height: size.y,
                depth: size.z,
            });

            console.log("Model Dimensions:", size);
        }
    }, []);
    return (
        <>
            <group ref={group} {...props} dispose={null}>
                <group name="Scene">
                    <group name="Armature003" rotation={[0, 0, 0]}>
                        <skinnedMesh
                            name="avaturn_glasses_0"
                            geometry={nodes.avaturn_glasses_0.geometry}
                            material={materials['avaturn_glasses_0_material.004']}
                            skeleton={nodes.avaturn_glasses_0.skeleton}
                        />
                        <skinnedMesh
                            name="avaturn_glasses_1"
                            geometry={nodes.avaturn_glasses_1.geometry}
                            material={materials['avaturn_glasses_1_material.004']}
                            skeleton={nodes.avaturn_glasses_1.skeleton}
                        />
                        <skinnedMesh
                            name="avaturn_hair_0"
                            geometry={nodes.avaturn_hair_0.geometry}
                            material={materials['avaturn_hair_0_material.004']}
                            skeleton={nodes.avaturn_hair_0.skeleton}
                        />
                        <skinnedMesh
                            name="avaturn_look_0"
                            geometry={nodes.avaturn_look_0.geometry}
                            material={materials['avaturn_look_0_material.004']}
                            skeleton={nodes.avaturn_look_0.skeleton}
                        />
                        <skinnedMesh
                            name="avaturn_shoes_0"
                            geometry={nodes.avaturn_shoes_0.geometry}
                            material={materials['avaturn_shoes_0_material.004']}
                            skeleton={nodes.avaturn_shoes_0.skeleton}
                        />
                        <skinnedMesh
                            name="Body_Mesh"
                            geometry={nodes.Body_Mesh.geometry}
                            material={materials['Body.004']}
                            skeleton={nodes.Body_Mesh.skeleton}
                        />
                        <skinnedMesh
                            name="Eye_Mesh"
                            geometry={nodes.Eye_Mesh.geometry}
                            material={materials['Eyes.004']}
                            skeleton={nodes.Eye_Mesh.skeleton}
                            morphTargetDictionary={nodes.Eye_Mesh.morphTargetDictionary}
                            morphTargetInfluences={nodes.Eye_Mesh.morphTargetInfluences}
                        />
                        <skinnedMesh
                            name="EyeAO_Mesh"
                            geometry={nodes.EyeAO_Mesh.geometry}
                            material={materials['EyeAO.004']}
                            skeleton={nodes.EyeAO_Mesh.skeleton}
                            morphTargetDictionary={nodes.EyeAO_Mesh.morphTargetDictionary}
                            morphTargetInfluences={nodes.EyeAO_Mesh.morphTargetInfluences}
                        />
                        <skinnedMesh
                            name="Eyelash_Mesh"
                            geometry={nodes.Eyelash_Mesh.geometry}
                            material={materials['Eyelash.004']}
                            skeleton={nodes.Eyelash_Mesh.skeleton}
                            morphTargetDictionary={nodes.Eyelash_Mesh.morphTargetDictionary}
                            morphTargetInfluences={nodes.Eyelash_Mesh.morphTargetInfluences}
                        />
                        <skinnedMesh
                            name="Head_Mesh"
                            geometry={nodes.Head_Mesh.geometry}
                            material={materials['Head.004']}
                            skeleton={nodes.Head_Mesh.skeleton}
                            morphTargetDictionary={nodes.Head_Mesh.morphTargetDictionary}
                            morphTargetInfluences={nodes.Head_Mesh.morphTargetInfluences}
                        />
                        <skinnedMesh
                            name="Teeth_Mesh"
                            geometry={nodes.Teeth_Mesh.geometry}
                            material={materials['Teeth.008']}
                            skeleton={nodes.Teeth_Mesh.skeleton}
                            morphTargetDictionary={nodes.Teeth_Mesh.morphTargetDictionary}
                            morphTargetInfluences={nodes.Teeth_Mesh.morphTargetInfluences}
                        />
                        <skinnedMesh
                            name="Tongue_Mesh"
                            geometry={nodes.Tongue_Mesh.geometry}
                            material={materials['Teeth.009']}
                            skeleton={nodes.Tongue_Mesh.skeleton}
                            morphTargetDictionary={nodes.Tongue_Mesh.morphTargetDictionary}
                            morphTargetInfluences={nodes.Tongue_Mesh.morphTargetInfluences}
                        />
                        <primitive object={nodes.Hips} />
                    </group>
                </group>
            </group>
        </>
        // <group {...props} dispose={null} ref={group} position={[0, 0, 0]}>
        //     <group position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
        //         <skinnedMesh
        //             geometry={nodes.avaturn_glasses_0.geometry}
        //             material={materials.avaturn_glasses_0_material}
        //             skeleton={nodes.avaturn_glasses_0.skeleton}
        //         />
        //         <skinnedMesh
        //             geometry={nodes.avaturn_glasses_1.geometry}
        //             material={materials.avaturn_glasses_1_material}
        //             skeleton={nodes.avaturn_glasses_1.skeleton}
        //         />
        //         <skinnedMesh
        //             geometry={nodes.avaturn_hair_0.geometry}
        //             material={materials.avaturn_hair_0_material}
        //             skeleton={nodes.avaturn_hair_0.skeleton}
        //         />
        //         <skinnedMesh
        //             geometry={nodes.avaturn_look_0.geometry}
        //             material={materials.avaturn_look_0_material}
        //             skeleton={nodes.avaturn_look_0.skeleton}
        //         />
        //         <skinnedMesh
        //             geometry={nodes.avaturn_shoes_0.geometry}
        //             material={materials.avaturn_shoes_0_material}
        //             skeleton={nodes.avaturn_shoes_0.skeleton}
        //         />
        //         <skinnedMesh
        //             geometry={nodes.Body_Mesh.geometry}
        //             material={materials.Body}
        //             skeleton={nodes.Body_Mesh.skeleton}
        //         />
        //         <skinnedMesh
        //             name="Eye_Mesh"
        //             geometry={nodes.Eye_Mesh.geometry}
        //             material={materials.Eyes}
        //             skeleton={nodes.Eye_Mesh.skeleton}
        //             morphTargetDictionary={nodes.Eye_Mesh.morphTargetDictionary}
        //             morphTargetInfluences={nodes.Eye_Mesh.morphTargetInfluences}
        //         />
        //         <skinnedMesh
        //             name="EyeAO_Mesh"
        //             geometry={nodes.EyeAO_Mesh.geometry}
        //             material={materials.EyeAO}
        //             skeleton={nodes.EyeAO_Mesh.skeleton}
        //             morphTargetDictionary={nodes.EyeAO_Mesh.morphTargetDictionary}
        //             morphTargetInfluences={nodes.EyeAO_Mesh.morphTargetInfluences}
        //         />
        //         <skinnedMesh
        //             name="Eyelash_Mesh"
        //             geometry={nodes.Eyelash_Mesh.geometry}
        //             material={materials.Eyelash}
        //             skeleton={nodes.Eyelash_Mesh.skeleton}
        //             morphTargetDictionary={nodes.Eyelash_Mesh.morphTargetDictionary}
        //             morphTargetInfluences={nodes.Eyelash_Mesh.morphTargetInfluences}
        //         />
        //         <skinnedMesh
        //             name="Head_Mesh"
        //             geometry={nodes.Head_Mesh.geometry}
        //             material={materials.Head}
        //             skeleton={nodes.Head_Mesh.skeleton}
        //             morphTargetDictionary={nodes.Head_Mesh.morphTargetDictionary}
        //             morphTargetInfluences={nodes.Head_Mesh.morphTargetInfluences}
        //         />
        //         <skinnedMesh
        //             name="Teeth_Mesh"
        //             geometry={nodes.Teeth_Mesh.geometry}
        //             material={materials.Teeth}
        //             skeleton={nodes.Teeth_Mesh.skeleton}
        //             morphTargetDictionary={nodes.Teeth_Mesh.morphTargetDictionary}
        //             morphTargetInfluences={nodes.Teeth_Mesh.morphTargetInfluences}
        //         />
        //         <skinnedMesh
        //             name="Tongue_Mesh"
        //             geometry={nodes.Tongue_Mesh.geometry}
        //             material={materials['Teeth.001']}
        //             skeleton={nodes.Tongue_Mesh.skeleton}
        //             morphTargetDictionary={nodes.Tongue_Mesh.morphTargetDictionary}
        //             morphTargetInfluences={nodes.Tongue_Mesh.morphTargetInfluences}
        //         />
        //         <primitive object={nodes.Hips} />
        //     </group>
        // </group>
    )
}

useGLTF.preload(file)

export default Model
