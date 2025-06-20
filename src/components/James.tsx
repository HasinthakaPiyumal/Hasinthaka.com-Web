/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { use, useEffect, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh, SkinnedMesh } from 'three';
import { useControls } from 'leva';
import { ReactThreeFiber, useFrame, useLoader } from '@react-three/fiber';

interface ModelProps {
    scale?: number | [number, number, number];
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const lipSync = {
    "metadata": {
        "soundFile": "D:\\Public Projects\\EveluationHour.ai\\chirag_1742551146360.wav",
        "duration": 6.39
    },
    "mouthCues": [
        { "start": 0.00, "end": 0.22, "value": "X" },
        { "start": 0.22, "end": 0.34, "value": "C" },
        { "start": 0.34, "end": 0.41, "value": "B" },
        { "start": 0.41, "end": 0.73, "value": "D" },
        { "start": 0.73, "end": 0.80, "value": "E" },
        { "start": 0.80, "end": 1.04, "value": "F" },
        { "start": 1.04, "end": 1.32, "value": "B" },
        { "start": 1.32, "end": 1.39, "value": "F" },
        { "start": 1.39, "end": 1.53, "value": "C" },
        { "start": 1.53, "end": 1.61, "value": "A" },
        { "start": 1.61, "end": 1.80, "value": "B" },
        { "start": 1.80, "end": 2.01, "value": "F" },
        { "start": 2.01, "end": 2.15, "value": "C" },
        { "start": 2.15, "end": 2.23, "value": "A" },
        { "start": 2.23, "end": 2.35, "value": "F" },
        { "start": 2.35, "end": 2.42, "value": "B" },
        { "start": 2.42, "end": 2.77, "value": "C" },
        { "start": 2.77, "end": 2.84, "value": "B" },
        { "start": 2.84, "end": 3.23, "value": "X" },
        { "start": 3.23, "end": 3.34, "value": "C" },
        { "start": 3.34, "end": 3.41, "value": "B" },
        { "start": 3.41, "end": 3.48, "value": "C" },
        { "start": 3.48, "end": 3.56, "value": "A" },
        { "start": 3.56, "end": 3.85, "value": "B" },
        { "start": 3.85, "end": 3.99, "value": "E" },
        { "start": 3.99, "end": 4.06, "value": "G" },
        { "start": 4.06, "end": 4.20, "value": "F" },
        { "start": 4.20, "end": 4.41, "value": "B" },
        { "start": 4.41, "end": 4.48, "value": "C" },
        { "start": 4.48, "end": 4.69, "value": "B" },
        { "start": 4.69, "end": 4.76, "value": "C" },
        { "start": 4.76, "end": 4.90, "value": "B" },
        { "start": 4.90, "end": 5.04, "value": "C" },
        { "start": 5.04, "end": 5.45, "value": "X" },
        { "start": 5.45, "end": 5.73, "value": "C" },
        { "start": 5.73, "end": 5.86, "value": "A" },
        { "start": 5.86, "end": 5.98, "value": "E" },
        { "start": 5.98, "end": 6.26, "value": "C" },
        { "start": 6.26, "end": 6.39, "value": "X" }
    ]
};

const correspondingMorphTargets = {
    "A": "viseme_PP",
    "B": "viseme_kk",
    "C": "viseme_I",
    "D": "viseme_aa",
    "E": "viseme_O",
    "F": "viseme_U",
    "G": "viseme_FF",
    "H": "viseme_TH",
    "X": "viseme_PP"
}
const James = (props: ModelProps) => {
    const { nodes, materials } = useGLTF('/James-v2.glb')
    const { playing } = useControls({
        playing: { value: false, label: 'Play Audio' }
    })
    const audio = useMemo(() => new Audio('/audio.wav'), [])

    useEffect(
        () => {
            if (playing) audio.play()
            else audio.pause()

            return () => {
                audio.pause()
                audio.currentTime = 0
            }
        },
        [audio, playing]
    )

    useEffect(() => {
        console.log("Morph Target Dictionaries")
        console.log((nodes.Eye_Mesh as Mesh).morphTargetDictionary)
        console.log((nodes.EyeAO_Mesh as Mesh).morphTargetDictionary)
        console.log((nodes.Eyelash_Mesh as Mesh).morphTargetDictionary)
        console.log((nodes.Head_Mesh as Mesh).morphTargetDictionary)
        console.log((nodes.Teeth_Mesh as Mesh).morphTargetDictionary)
        console.log((nodes.Tongue_Mesh as Mesh).morphTargetDictionary)
    }, [])

    function changeMouth(lip: keyof typeof correspondingMorphTargets) {
        const headInfluences = (nodes.Head_Mesh as Mesh).morphTargetInfluences;
        const teethInfluences = (nodes.Teeth_Mesh as Mesh).morphTargetInfluences;
        const tongueInfluences = (nodes.Tongue_Mesh as Mesh).morphTargetInfluences;
        const headDictionary = (nodes.Head_Mesh as Mesh).morphTargetDictionary;
        const teethDictionary = (nodes.Teeth_Mesh as Mesh).morphTargetDictionary;
        const tongueDictionary = (nodes.Tongue_Mesh as Mesh).morphTargetDictionary;

        Object.keys(correspondingMorphTargets).forEach((key, index) => {
            const typedKey = key as keyof typeof correspondingMorphTargets;
            if (correspondingMorphTargets[typedKey] !== correspondingMorphTargets[lip]) {
                if (headInfluences && headDictionary) headInfluences[headDictionary[correspondingMorphTargets[typedKey]]] = 0;
                if (teethInfluences && teethDictionary) teethInfluences[teethDictionary[correspondingMorphTargets[typedKey]]] = 0;
                if (tongueInfluences && tongueDictionary) tongueInfluences[tongueDictionary[correspondingMorphTargets[typedKey]]] = 0;
            } else {
                if (headInfluences && headDictionary) headInfluences[headDictionary[correspondingMorphTargets[lip]]] = 1;
                if (teethInfluences && teethDictionary) teethInfluences[teethDictionary[correspondingMorphTargets[lip]]] = 2;
                if (tongueInfluences && tongueDictionary) tongueInfluences[tongueDictionary[correspondingMorphTargets[lip]]] = 1;
            }
        });
    }

    useFrame(() => {
        const currentTime = audio.currentTime;
        const mouthCue = lipSync.mouthCues.find(cue => cue.start <= currentTime && cue.end >= currentTime);
        if (mouthCue) {
            const morphTargetInfluences = (nodes.Head_Mesh as Mesh).morphTargetInfluences;
            const morphTargetDictionary = (nodes.Head_Mesh as Mesh).morphTargetDictionary;
            if (morphTargetDictionary && morphTargetInfluences) {
                changeMouth(mouthCue.value as keyof typeof correspondingMorphTargets)
            }
        }
    });

    useEffect(() => {
        const eyeMesh = nodes.Eye_Mesh as Mesh;
        const eyeAOMesh = nodes.EyeAO_Mesh as Mesh;
        const eyelashMesh = nodes.Eyelash_Mesh as Mesh;

        // Blink animation
        const blinkInterval = setInterval(() => {
            if (!playing) return;

            const duration = 200; // Blink duration in ms
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // First half of animation - closing eyes
                const blinkValue = progress <= 0.5
                    ? progress * 2 // 0 to 1
                    : (1 - (progress - 0.5) * 2); // 1 to 0

                if (eyeMesh.morphTargetInfluences && eyeMesh.morphTargetDictionary) {
                    eyeMesh.morphTargetInfluences[eyeMesh.morphTargetDictionary.eyesClosed] = blinkValue;
                }
                if (eyeAOMesh.morphTargetInfluences && eyeAOMesh.morphTargetDictionary) {
                    eyeAOMesh.morphTargetInfluences[eyeAOMesh.morphTargetDictionary.eyesClosed] = blinkValue;
                }
                if (eyelashMesh.morphTargetInfluences && eyelashMesh.morphTargetDictionary) {
                    eyelashMesh.morphTargetInfluences[eyelashMesh.morphTargetDictionary.eyesClosed] = blinkValue;
                }

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        }, 4000); // Blink every 4 seconds

        return () => clearInterval(blinkInterval);
    }, [nodes, playing]);
    return (
        <group {...props} dispose={null}>
            <skinnedMesh
                geometry={(nodes.avaturn_hair_0 as SkinnedMesh).geometry}
                material={materials.avaturn_hair_0_material}
                skeleton={(nodes.avaturn_hair_0 as SkinnedMesh).skeleton}
            />
            <skinnedMesh
                geometry={(nodes.avaturn_look_0 as SkinnedMesh).geometry}
                material={materials.avaturn_look_0_material}
                skeleton={(nodes.avaturn_look_0 as SkinnedMesh).skeleton}
            />
            <skinnedMesh
                geometry={(nodes.Body_Mesh as SkinnedMesh).geometry}
                material={materials.Body}
                skeleton={(nodes.Body_Mesh as SkinnedMesh).skeleton}
            />
            <skinnedMesh
                name="Eye_Mesh"
                geometry={(nodes.Eye_Mesh as SkinnedMesh).geometry}
                material={materials.Eyes}
                skeleton={(nodes.Eye_Mesh as SkinnedMesh).skeleton}
                morphTargetDictionary={(nodes.Eye_Mesh as SkinnedMesh).morphTargetDictionary}
                morphTargetInfluences={(nodes.Eye_Mesh as SkinnedMesh).morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeAO_Mesh"
                geometry={(nodes.EyeAO_Mesh as SkinnedMesh).geometry}
                material={materials.EyeAO}
                skeleton={(nodes.EyeAO_Mesh as SkinnedMesh).skeleton}
                morphTargetDictionary={(nodes.EyeAO_Mesh as SkinnedMesh).morphTargetDictionary}
                morphTargetInfluences={(nodes.EyeAO_Mesh as SkinnedMesh).morphTargetInfluences}
            />
            <skinnedMesh
                name="Eyelash_Mesh"
                geometry={(nodes.Eyelash_Mesh as SkinnedMesh).geometry}
                material={materials.Eyelash}
                skeleton={(nodes.Eyelash_Mesh as SkinnedMesh).skeleton}
                morphTargetDictionary={(nodes.Eyelash_Mesh as SkinnedMesh).morphTargetDictionary}
                morphTargetInfluences={(nodes.Eyelash_Mesh as SkinnedMesh).morphTargetInfluences}
            />
            <skinnedMesh
                name="Head_Mesh"
                geometry={(nodes.Head_Mesh as SkinnedMesh).geometry}
                material={materials.Head}
                skeleton={(nodes.Head_Mesh as SkinnedMesh).skeleton}
                morphTargetDictionary={(nodes.Head_Mesh as SkinnedMesh).morphTargetDictionary}
                morphTargetInfluences={(nodes.Head_Mesh as SkinnedMesh).morphTargetInfluences}
            />
            <skinnedMesh
                name="Teeth_Mesh"
                geometry={(nodes.Teeth_Mesh as SkinnedMesh).geometry}
                material={materials.Teeth}
                skeleton={(nodes.Teeth_Mesh as SkinnedMesh).skeleton}
                morphTargetDictionary={(nodes.Teeth_Mesh as SkinnedMesh).morphTargetDictionary}
                morphTargetInfluences={(nodes.Teeth_Mesh as SkinnedMesh).morphTargetInfluences}
            />
            <skinnedMesh
                name="Tongue_Mesh"
                geometry={(nodes.Tongue_Mesh as SkinnedMesh).geometry}
                material={materials['Teeth.001']}
                skeleton={(nodes.Tongue_Mesh as SkinnedMesh).skeleton}
                morphTargetDictionary={(nodes.Tongue_Mesh as SkinnedMesh).morphTargetDictionary}
                morphTargetInfluences={(nodes.Tongue_Mesh as SkinnedMesh).morphTargetInfluences}
            />
            <primitive object={nodes.Hips} />
        </group>
    )
}

useGLTF.preload('/James-V2.glb')

export default James
