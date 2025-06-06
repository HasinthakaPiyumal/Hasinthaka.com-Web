'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Html, useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { AnimationAction, AnimationClip, Box3, BoxHelper, Group, Vector3, Object3D, Mesh, SkinnedMesh } from 'three'
import { useFrame, useGraph } from '@react-three/fiber'
import { SkeletonUtils } from 'three-stdlib'
import gsap from 'gsap'
import * as THREE from 'three'
/* eslint-disable */

const file = '/my_avatar_with_animation_v2.glb'
interface ModelProps {
    scale?: number | [number, number, number];
    position?: [number, number, number];
    rotation?: [number, number, number];
    pageRef: React.RefObject<HTMLDivElement>;
}

enum AnimationNames {
    Waving = 'waving',
    Jumping = 'jumping',
    Idle = 'idle',
    Sitting = 'sitting',
}

const Model = (props: ModelProps) => {
    const group = useRef<Group>(null)
    const { scene, animations } = useGLTF(file)
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])

    const [scrollPosition, setScrollPosition] = useState(0);


    const { nodes, materials } = useGraph(clone)
    console.log(animations)
    // const { animations: wavingAnimation } = useFBX('/Waving_my_avatar.fbx')
    // const { animations: JumpingAnimation } = useFBX('/Jumping_my_avatar.fbx')

    // wavingAnimation[0].name = "waving"
    // JumpingAnimation[0].name = "jumping"
    const [animation, setAnimation] = useState<string>(AnimationNames.Waving)
    const [currentAction, setCurrentAction] = useState<AnimationAction | null>(null)
    const { actions, names } = useAnimations(animations, group)
    useEffect(() => {
        console.log('Setting animation')
        const nextAction = actions[animation]
        if (!nextAction) return
        if (currentAction !== nextAction) {
            console.log('Playing animation:', nextAction.time)
            console.log('Animation duration:', nextAction.getClip().duration)
            if (nextAction?.getClip().name === AnimationNames.Jumping) {
                console.log('Jumping animation detected')
                nextAction.reset().fadeIn(0.5).setEffectiveTimeScale(1.5).play()
                if (group.current) {
                    // gsap.to(group.current.scale, {
                    //     x: 0.3,
                    //     y: 0.3,
                    //     z: 0.3,
                    //     duration: 0.1,
                    // })
                }
            } else if (nextAction?.getClip().name === AnimationNames.Sitting) {
                console.log('Sitting animation detected')
                nextAction.reset().fadeIn(0.5).play().setLoop(THREE.LoopOnce, 1)
                nextAction.clampWhenFinished = true  // ✅ Hold final frame after finishing
                nextAction.paused = false            // Just to make sure it's not paused
                if (group.current) {
                    gsap.to(group.current.rotation, {
                        y: Math.PI / 5, // rotate to 180 degrees
                        duration: 0.1,
                    })
                }
            } else {
                nextAction.reset().fadeIn(0.5).play()
                if (group.current) {
                    gsap.to(group.current.rotation, {
                        y: 0, // rotate to 180 degrees
                        duration: 0.1,
                    })
                    // gsap.to(group.current.scale, {
                    //     x: 0.3,
                    //     y: 0.3,
                    //     z: 0.3,
                    //     duration: 0.1,
                    // })
                }
            }
            // nextAction.time = targetFrame / fps
            return () => {
                nextAction.fadeOut(0.2)
            }
        }
    }, [animation, actions, currentAction])

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

    useEffect(() => {
        const handleScroll = (): void => {
            const currentPos = props.pageRef.current?.scrollTop || 0;

            const windowHeight = window.innerHeight;
            // console.log("Scroll Position:", currentPos, "Window Height:", windowHeight);

            if (currentPos === 0) {
                setAnimation(AnimationNames.Waving);
            } else if (currentPos > 0 && currentPos < windowHeight - 10) {
                setAnimation(AnimationNames.Jumping);
            } else {
                setAnimation(AnimationNames.Sitting);
            }
        };

        const pageElement = props.pageRef.current;
        pageElement?.addEventListener("scroll", handleScroll);

        return () => {
            pageElement?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <group ref={group}{...props} dispose={null}>
            <group>
                <primitive object={nodes.Hips} />
                <skinnedMesh geometry={(nodes.avaturn_body as Mesh).geometry} material={materials.avaturn_body_material} skeleton={(nodes.avaturn_body as SkinnedMesh).skeleton} />
                <skinnedMesh geometry={(nodes.avaturn_glasses_0 as Mesh).geometry} material={materials.avaturn_glasses_0_material} skeleton={(nodes.avaturn_glasses_0 as SkinnedMesh).skeleton} />
                <skinnedMesh geometry={(nodes.avaturn_glasses_1 as Mesh).geometry} material={materials.avaturn_glasses_1_material} skeleton={(nodes.avaturn_glasses_1 as SkinnedMesh).skeleton} />
                <skinnedMesh geometry={(nodes.avaturn_hair_0 as Mesh).geometry} material={materials.avaturn_hair_0_material} skeleton={(nodes.avaturn_hair_0 as SkinnedMesh).skeleton} />
                <skinnedMesh geometry={(nodes.avaturn_shoes_0 as Mesh).geometry} material={materials.avaturn_shoes_0_material} skeleton={(nodes.avaturn_shoes_0 as SkinnedMesh).skeleton} />
                <skinnedMesh geometry={(nodes.avaturn_look_0 as Mesh).geometry} material={materials.avaturn_look_0_material} skeleton={(nodes.avaturn_look_0 as SkinnedMesh).skeleton} />
            </group>
        </group>
    )
}

useGLTF.preload(file)

export default Model
